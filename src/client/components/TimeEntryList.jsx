import React, { useState } from 'react';
import { display, value } from '../utils/fields.js';

export default function TimeEntryList({ user, timeEntries, onUpdateEntry, onDeleteEntry }) {
  const [editingEntry, setEditingEntry] = useState(null);

  const handleEdit = (entry) => {
    setEditingEntry({
      ...entry,
      work_date: display(entry.work_date),
      start_time: display(entry.start_time).split(' ')[1]?.substring(0, 5) || '',
      end_time: display(entry.end_time).split(' ')[1]?.substring(0, 5) || ''
    });
  };

  const handleSave = async (updatedEntry) => {
    try {
      // Calculate hours
      const hours = calculateHours(updatedEntry.start_time, updatedEntry.end_time);
      
      // Format datetime fields
      const startDateTime = updatedEntry.work_date + ' ' + updatedEntry.start_time + ':00';
      const endDateTime = updatedEntry.work_date + ' ' + updatedEntry.end_time + ':00';

      const entryData = {
        project_code: display(updatedEntry.project_code),
        client_name: display(updatedEntry.client_name),
        task_description: display(updatedEntry.task_description),
        work_date: updatedEntry.work_date,
        start_time: startDateTime,
        end_time: endDateTime,
        hours_worked: hours,
        work_type: display(updatedEntry.work_type),
        billable: display(updatedEntry.billable) === 'true'
      };

      // Update via shared state
      onUpdateEntry(value(updatedEntry.sys_id), entryData);
      
      alert('✅ Time entry updated successfully!\n\n✨ Changes are reflected across all views instantly!');
      setEditingEntry(null);
    } catch (error) {
      console.error('Error updating entry:', error);
      alert('⚠️ Error updating time entry');
    }
  };

  const handleDelete = async (entryId) => {
    if (!confirm('Are you sure you want to delete this time entry?')) {
      return;
    }

    try {
      // Delete via shared state
      onDeleteEntry(entryId);
      alert('✅ Time entry deleted successfully!\n\n✨ Analytics and summaries updated automatically!');
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('⚠️ Error deleting time entry');
    }
  };

  // Helper function to calculate hours
  const calculateHours = (startTime, endTime) => {
    if (!startTime || !endTime) return '0.0';
    const start = new Date(`2000-01-01 ${startTime}`);
    const end = new Date(`2000-01-01 ${endTime}`);
    const diff = end - start;
    return (diff / (1000 * 60 * 60)).toFixed(1);
  };

  const getStatusBadge = (status) => {
    const statusValue = display(status);
    const statusClass = `status-badge status-${statusValue}`;
    const statusEmoji = {
      draft: '📝',
      submitted: '📤',
      approved: '✅',
      rejected: '❌',
      invoiced: '💰'
    };
    
    return (
      <span className={statusClass}>
        {statusEmoji[statusValue] || ''} {statusValue.charAt(0).toUpperCase() + statusValue.slice(1)}
      </span>
    );
  };

  const getWorkTypeEmoji = (workType) => {
    const typeEmojis = {
      design: '🎨',
      analysis: '🔍',
      consultation: '💬',
      field_work: '🏗️',
      documentation: '📋',
      meeting: '🤝',
      travel: '🚗',
      administrative: '📊'
    };
    return typeEmojis[display(workType)] || '⚡';
  };

  const totalHours = timeEntries.reduce((sum, entry) => sum + parseFloat(display(entry.hours_worked) || 0), 0);
  const billableHours = timeEntries
    .filter(entry => display(entry.billable) === 'true')
    .reduce((sum, entry) => sum + parseFloat(display(entry.hours_worked) || 0), 0);

  return (
    <div>
      {/* Live Data Notice */}
      <div style={{
        background: '#e6fffa',
        padding: '1rem',
        borderRadius: '6px',
        marginBottom: '2rem',
        border: '1px solid #38b2ac'
      }}>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#234e52' }}>
          <strong>🔄 Live Data:</strong> Your timesheet updates automatically as you create, edit, or delete entries.
        </p>
      </div>

      {/* Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3182ce' }}>{timeEntries.length}</div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>📋 Total Entries</div>
        </div>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#38a169' }}>{totalHours.toFixed(1)}</div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>⏰ Total Hours</div>
        </div>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ed8936' }}>{billableHours.toFixed(1)}</div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>💰 Billable Hours</div>
        </div>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#805ad5' }}>
            {((billableHours/totalHours)*100 || 0).toFixed(0)}%
          </div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>📈 Utilization</div>
        </div>
      </div>

      <div className="table-container">
        <div style={{ padding: '1.5rem 1.5rem 0' }}>
          <h2>📋 My Timesheet</h2>
          <p style={{ color: '#718096', marginBottom: '1rem' }}>
            {timeEntries.length} entries found • {totalHours.toFixed(1)} total hours • {((billableHours/totalHours)*100 || 0).toFixed(0)}% billable
          </p>
        </div>
        
        {timeEntries.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
            <h3>No time entries yet</h3>
            <p>Start by creating your first time entry to track your work hours.</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Project</th>
                  <th>Task</th>
                  <th>Hours</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {timeEntries.map(entry => (
                  <tr key={value(entry.sys_id)}>
                    <td>
                      <strong>{display(entry.work_date)}</strong>
                    </td>
                    <td>
                      <strong>{display(entry.project_code)}</strong><br />
                      <small style={{ color: '#666' }}>{display(entry.client_name)}</small>
                    </td>
                    <td style={{ maxWidth: '300px' }}>
                      {display(entry.task_description)}
                    </td>
                    <td>
                      <strong>{display(entry.hours_worked)} hrs</strong>
                      {display(entry.billable) === 'true' && (
                        <div style={{ color: '#38a169', fontSize: '0.75rem' }}>💰 Billable</div>
                      )}
                    </td>
                    <td>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        {getWorkTypeEmoji(entry.work_type)}
                        {display(entry.work_type)?.charAt(0).toUpperCase() + display(entry.work_type)?.slice(1).replace('_', ' ')}
                      </span>
                    </td>
                    <td>{getStatusBadge(entry.status)}</td>
                    <td>
                      {display(entry.status) === 'draft' && (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button 
                            onClick={() => handleEdit(entry)}
                            style={{ 
                              padding: '0.25rem 0.5rem', 
                              fontSize: '0.875rem',
                              background: '#3182ce',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px'
                            }}
                          >
                            ✏️ Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(value(entry.sys_id))}
                            style={{ 
                              padding: '0.25rem 0.5rem', 
                              fontSize: '0.875rem', 
                              background: '#e53e3e', 
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px'
                            }}
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editingEntry && (
        <EditEntryModal
          entry={editingEntry}
          onSave={handleSave}
          onCancel={() => setEditingEntry(null)}
          onChange={setEditingEntry}
        />
      )}
    </div>
  );
}

function EditEntryModal({ entry, onSave, onCancel, onChange }) {
  const handleInputChange = (e) => {
    const { name, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : e.target.value;
    onChange(prev => ({ ...prev, [name]: val }));
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <h3>✏️ Edit Time Entry</h3>
        <div className="form-grid" style={{ marginTop: '1rem' }}>
          <div className="form-group">
            <label>Project Code</label>
            <input
              type="text"
              name="project_code"
              value={display(entry.project_code)}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Client Name</label>
            <input
              type="text"
              name="client_name"
              value={display(entry.client_name)}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Work Date</label>
            <input
              type="date"
              name="work_date"
              value={entry.work_date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Work Type</label>
            <select
              name="work_type"
              value={display(entry.work_type)}
              onChange={handleInputChange}
              required
            >
              <option value="design">🎨 Design</option>
              <option value="analysis">🔍 Analysis</option>
              <option value="consultation">💬 Consultation</option>
              <option value="field_work">🏗️ Field Work</option>
              <option value="documentation">📋 Documentation</option>
              <option value="meeting">🤝 Meeting</option>
              <option value="travel">🚗 Travel</option>
              <option value="administrative">📊 Administrative</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start Time</label>
            <input
              type="time"
              name="start_time"
              value={entry.start_time}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Time</label>
            <input
              type="time"
              name="end_time"
              value={entry.end_time}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group" style={{ marginTop: '1rem' }}>
          <label>Task Description</label>
          <textarea
            name="task_description"
            value={display(entry.task_description)}
            onChange={handleInputChange}
            rows={3}
            required
          />
        </div>
        <div className="form-group" style={{ marginTop: '1rem' }}>
          <label>
            <input
              type="checkbox"
              name="billable"
              checked={display(entry.billable) === 'true'}
              onChange={handleInputChange}
              style={{ marginRight: '0.5rem' }}
            />
            💰 Billable Time
          </label>
        </div>
        <div className="form-actions">
          <button onClick={() => onSave(entry)} className="btn-primary">
            ✅ Save Changes
          </button>
          <button onClick={onCancel} className="btn-secondary">
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  );
}