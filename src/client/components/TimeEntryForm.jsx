import React, { useState } from 'react';
import { display, value } from '../utils/fields.js';

export default function TimeEntryForm({ onEntryAdded, user, projects }) {
  const [formData, setFormData] = useState({
    project_code: '',
    client_name: '',
    task_description: '',
    work_date: new Date().toISOString().split('T')[0],
    start_time: '',
    end_time: '',
    work_type: '',
    billable: true
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : e.target.value;
    setFormData(prev => ({ ...prev, [name]: val }));
    
    // Auto-populate client name when project is selected
    if (name === 'project_code') {
      const selectedProject = projects.find(p => display(p.project_code) === val);
      if (selectedProject) {
        setFormData(prev => ({ 
          ...prev, 
          [name]: val,
          client_name: display(selectedProject.client_name)
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Calculate hours
      const hours = calculateHours(formData.start_time, formData.end_time);
      
      // Format datetime fields
      const startDateTime = formData.work_date + ' ' + formData.start_time + ':00';
      const endDateTime = formData.work_date + ' ' + formData.end_time + ':00';

      // Create the entry data
      const entryData = {
        ...formData,
        start_time: startDateTime,
        end_time: endDateTime,
        hours_worked: hours,
        employee: user ? value(user.sys_id) : 'demo-user-001'
      };

      // Add to shared state
      onEntryAdded(entryData);
      
      // Show success message
      alert(`✅ Time entry created successfully!

📋 Entry Details:
• Project: ${formData.project_code}
• Client: ${formData.client_name}
• Date: ${formData.work_date}
• Hours: ${hours}
• Task: ${formData.task_description}
• Work Type: ${formData.work_type?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
• Billable: ${formData.billable ? 'Yes' : 'No'}

✨ Your entry now appears in the timesheet and analytics!`);

      // Reset form
      setFormData({
        project_code: '',
        client_name: '',
        task_description: '',
        work_date: new Date().toISOString().split('T')[0],
        start_time: '',
        end_time: '',
        work_type: '',
        billable: true
      });

    } catch (error) {
      console.error('Error:', error);
      alert('⚠️ Error creating time entry. Please try again.');
    } finally {
      setLoading(false);
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

  return (
    <div className="form-container">
      <h2>⏱️ Log Time Entry</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Record your work hours with detailed project and task information.
      </p>
      
      {/* Live Update Notice */}
      <div style={{
        background: '#e6fffa',
        padding: '1rem',
        borderRadius: '6px',
        marginBottom: '2rem',
        border: '1px solid #38b2ac'
      }}>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#234e52' }}>
          <strong>🔄 Live Updates:</strong> New entries automatically appear in your timesheet and analytics immediately!
        </p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="project_code">Project Code *</label>
            <select
              id="project_code"
              name="project_code"
              value={formData.project_code}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Project</option>
              {projects.map(project => (
                <option key={value(project.sys_id)} value={display(project.project_code)}>
                  {display(project.project_code)} - {display(project.project_name)}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="client_name">Client Name *</label>
            <input
              type="text"
              id="client_name"
              name="client_name"
              value={formData.client_name}
              onChange={handleInputChange}
              placeholder="e.g., State DOT, City of..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="work_date">Work Date *</label>
            <input
              type="date"
              id="work_date"
              name="work_date"
              value={formData.work_date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="work_type">Work Type *</label>
            <select
              id="work_type"
              name="work_type"
              value={formData.work_type}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Work Type</option>
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
            <label htmlFor="start_time">Start Time *</label>
            <input
              type="time"
              id="start_time"
              name="start_time"
              value={formData.start_time}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="end_time">End Time *</label>
            <input
              type="time"
              id="end_time"
              name="end_time"
              value={formData.end_time}
              onChange={handleInputChange}
              required
            />
            {formData.start_time && formData.end_time && (
              <small style={{ color: '#666', marginTop: '0.25rem', display: 'block' }}>
                ⏰ Duration: {calculateHours(formData.start_time, formData.end_time)} hours
              </small>
            )}
          </div>
        </div>

        <div className="form-group" style={{ marginTop: '1rem' }}>
          <label htmlFor="task_description">Task Description *</label>
          <textarea
            id="task_description"
            name="task_description"
            value={formData.task_description}
            onChange={handleInputChange}
            rows={3}
            placeholder="Describe the specific work performed, deliverables created, or progress made..."
            required
          />
        </div>

        <div className="form-group" style={{ marginTop: '1rem' }}>
          <label>
            <input
              type="checkbox"
              name="billable"
              checked={formData.billable}
              onChange={handleInputChange}
              style={{ marginRight: '0.5rem' }}
            />
            💰 Billable Time
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? '⏳ Saving...' : '✅ Save Time Entry'}
          </button>
        </div>
      </form>

      {/* Help Section */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: '#f7fafc',
        borderRadius: '6px',
        fontSize: '0.875rem'
      }}>
        <h4 style={{ marginBottom: '0.5rem' }}>💡 Tips for Accurate Time Tracking</h4>
        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
          <li>Log time daily for better accuracy</li>
          <li>Include specific deliverables in task descriptions</li>
          <li>Mark non-billable time for internal work</li>
          <li>Use consistent project codes for reporting</li>
          <li>Be detailed about field work locations and conditions</li>
        </ul>
      </div>
    </div>
  );
}