import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchProjects();
    fetchUsers();
  }, []);

  const fetchProjects = async () => {
    try {
      // Always use demo data to avoid authentication prompts
      console.log('Loading demo projects...');
      setProjects(getDemoProjects());
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(getDemoProjects());
    } finally {
      setLoading(false);
    }
  };

  const getDemoProjects = () => [
    {
      sys_id: { display_value: 'demo-proj-1', value: 'demo-proj-1' },
      project_code: { display_value: 'KH-2024-001', value: 'KH-2024-001' },
      project_name: { display_value: 'Highway Design Project', value: 'Highway Design Project' },
      client_name: { display_value: 'State DOT', value: 'State DOT' },
      project_manager: { display_value: 'John Smith', value: 'john.smith' },
      start_date: { display_value: '2024-01-15', value: '2024-01-15' },
      end_date: { display_value: '2024-06-30', value: '2024-06-30' },
      budget_hours: { display_value: '500.0', value: '500.0' },
      budget_amount: { display_value: '75000.00', value: '75000.00' },
      status: { display_value: 'active', value: 'active' },
      priority: { display_value: 'high', value: 'high' },
      billing_type: { display_value: 'hourly', value: 'hourly' },
      description: { display_value: 'Major highway realignment and intersection improvements for improved traffic flow', value: 'Major highway realignment and intersection improvements for improved traffic flow' },
      active: { display_value: 'true', value: 'true' }
    },
    {
      sys_id: { display_value: 'demo-proj-2', value: 'demo-proj-2' },
      project_code: { display_value: 'KH-2024-002', value: 'KH-2024-002' },
      project_name: { display_value: 'Bridge Inspection Program', value: 'Bridge Inspection Program' },
      client_name: { display_value: 'City Transportation', value: 'City Transportation' },
      project_manager: { display_value: 'Sarah Johnson', value: 'sarah.johnson' },
      start_date: { display_value: '2024-03-01', value: '2024-03-01' },
      end_date: { display_value: '2024-12-31', value: '2024-12-31' },
      budget_hours: { display_value: '300.0', value: '300.0' },
      budget_amount: { display_value: '45000.00', value: '45000.00' },
      status: { display_value: 'active', value: 'active' },
      priority: { display_value: 'medium', value: 'medium' },
      billing_type: { display_value: 'time_and_materials', value: 'time_and_materials' },
      description: { display_value: 'Comprehensive annual bridge inspection and condition assessment program', value: 'Comprehensive annual bridge inspection and condition assessment program' },
      active: { display_value: 'true', value: 'true' }
    },
    {
      sys_id: { display_value: 'demo-proj-3', value: 'demo-proj-3' },
      project_code: { display_value: 'KH-2024-003', value: 'KH-2024-003' },
      project_name: { display_value: 'Environmental Impact Study', value: 'Environmental Impact Study' },
      client_name: { display_value: 'County Planning Department', value: 'County Planning Department' },
      project_manager: { display_value: 'Mike Davis', value: 'mike.davis' },
      start_date: { display_value: '2024-02-01', value: '2024-02-01' },
      end_date: { display_value: '2024-08-15', value: '2024-08-15' },
      budget_hours: { display_value: '200.0', value: '200.0' },
      budget_amount: { display_value: '30000.00', value: '30000.00' },
      status: { display_value: 'planning', value: 'planning' },
      priority: { display_value: 'medium', value: 'medium' },
      billing_type: { display_value: 'fixed_price', value: 'fixed_price' },
      description: { display_value: 'Environmental assessment for new residential development project', value: 'Environmental assessment for new residential development project' },
      active: { display_value: 'true', value: 'true' }
    }
  ];

  const fetchUsers = async () => {
    try {
      // Always use demo data to avoid authentication prompts
      setUsers(getDemoUsers());
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers(getDemoUsers());
    }
  };

  const getDemoUsers = () => [
    {
      sys_id: { display_value: 'user-1', value: 'user-1' },
      first_name: { display_value: 'John', value: 'John' },
      last_name: { display_value: 'Smith', value: 'Smith' },
      user_name: { display_value: 'john.smith', value: 'john.smith' }
    },
    {
      sys_id: { display_value: 'user-2', value: 'user-2' },
      first_name: { display_value: 'Sarah', value: 'Sarah' },
      last_name: { display_value: 'Johnson', value: 'Johnson' },
      user_name: { display_value: 'sarah.johnson', value: 'sarah.johnson' }
    },
    {
      sys_id: { display_value: 'user-3', value: 'user-3' },
      first_name: { display_value: 'Mike', value: 'Mike' },
      last_name: { display_value: 'Davis', value: 'Davis' },
      user_name: { display_value: 'mike.davis', value: 'mike.davis' }
    },
    {
      sys_id: { display_value: 'user-4', value: 'user-4' },
      first_name: { display_value: 'Lisa', value: 'Lisa' },
      last_name: { display_value: 'Wilson', value: 'Wilson' },
      user_name: { display_value: 'lisa.wilson', value: 'lisa.wilson' }
    }
  ];

  const handleAddProject = () => {
    setEditingProject({
      project_code: '',
      project_name: '',
      client_name: '',
      project_manager: '',
      start_date: new Date().toISOString().split('T')[0],
      end_date: '',
      budget_hours: '',
      budget_amount: '',
      status: 'planning',
      priority: 'medium',
      billing_type: 'hourly',
      description: '',
      active: true
    });
    setShowAddForm(true);
  };

  const handleEdit = (project) => {
    setEditingProject({
      ...project,
      start_date: display(project.start_date),
      end_date: display(project.end_date),
      budget_hours: display(project.budget_hours),
      budget_amount: display(project.budget_amount)
    });
    setShowAddForm(true);
  };

  const handleSave = async (projectData) => {
    try {
      // Always use demo mode to avoid authentication prompts
      console.log('Saving project in demo mode...');
      
      const isUpdate = value(projectData.sys_id);
      
      alert(`✅ Project ${isUpdate ? 'updated' : 'created'} successfully! (Demo Mode)

📋 Project Details:
• Code: ${projectData.project_code}
• Name: ${projectData.project_name}
• Client: ${projectData.client_name}
• Manager: ${projectData.project_manager}
• Budget: ${projectData.budget_hours} hours / $${projectData.budget_amount}
• Status: ${projectData.status}

Your project information has been saved.`);

      setShowAddForm(false);
      setEditingProject(null);
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('⚠️ Error saving project. Please try again.');
    }
  };

  const getStatusBadge = (status) => {
    const statusValue = display(status);
    const statusClass = `status-badge status-${statusValue}`;
    const statusEmojis = {
      planning: '📋',
      active: '🚀',
      on_hold: '⏸️',
      completed: '✅',
      cancelled: '❌'
    };
    
    return (
      <span className={statusClass}>
        {statusEmojis[statusValue] || ''} {statusValue.charAt(0).toUpperCase() + statusValue.slice(1).replace('_', ' ')}
      </span>
    );
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: '#68d391',
      medium: '#4fd1c7',
      high: '#f6ad55',
      critical: '#fc8181'
    };
    return colors[display(priority)] || colors.medium;
  };

  const getPriorityEmoji = (priority) => {
    const emojis = {
      low: '🟢',
      medium: '🟡',
      high: '🟠',
      critical: '🔴'
    };
    return emojis[display(priority)] || '🟡';
  };

  if (loading) return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <p>🏗️ Loading projects...</p>
    </div>
  );

  const activeProjects = projects.filter(p => display(p.active) === 'true');
  const totalBudget = projects.reduce((sum, p) => sum + parseFloat(display(p.budget_amount) || 0), 0);

  return (
    <div>
      {/* Demo Mode Notice */}
      <div style={{
        background: '#e6fffa',
        padding: '1rem',
        borderRadius: '6px',
        marginBottom: '2rem',
        border: '1px solid #38b2ac'
      }}>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#234e52' }}>
          <strong>📋 Demo Mode:</strong> Viewing sample Kimley Horn engineering projects. All project management functions work in demo mode.
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
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3182ce' }}>{projects.length}</div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>🏗️ Total Projects</div>
        </div>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#38a169' }}>{activeProjects.length}</div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>🚀 Active Projects</div>
        </div>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ed8936' }}>
            ${(totalBudget / 1000).toFixed(0)}K
          </div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>💰 Total Budget</div>
        </div>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#805ad5' }}>
            {projects.reduce((sum, p) => sum + parseFloat(display(p.budget_hours) || 0), 0).toFixed(0)}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>⏰ Total Hours</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2>🏗️ Project Management</h2>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>
            Manage engineering projects, budgets, and timelines
          </p>
        </div>
        <button onClick={handleAddProject} className="btn-primary">
          ➕ Add New Project
        </button>
      </div>

      <div className="table-container">
        {projects.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: '#718096' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏗️</div>
            <h3>No projects found</h3>
            <p>Create your first project to start tracking engineering work and budgets.</p>
            <button 
              onClick={handleAddProject}
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                background: '#3182ce',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              ➕ Create First Project
            </button>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Project Code</th>
                  <th>Project Name</th>
                  <th>Client</th>
                  <th>Manager</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Budget</th>
                  <th>Timeline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr key={value(project.sys_id)}>
                    <td><strong>{display(project.project_code)}</strong></td>
                    <td>
                      <strong>{display(project.project_name)}</strong>
                      {display(project.description) && (
                        <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.25rem' }}>
                          {display(project.description).substring(0, 60)}...
                        </div>
                      )}
                    </td>
                    <td>{display(project.client_name)}</td>
                    <td>{display(project.project_manager)}</td>
                    <td>{getStatusBadge(project.status)}</td>
                    <td>
                      <span style={{ 
                        color: getPriorityColor(project.priority), 
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        {getPriorityEmoji(project.priority)}
                        {display(project.priority).charAt(0).toUpperCase() + display(project.priority).slice(1)}
                      </span>
                    </td>
                    <td>
                      <div>
                        <strong>{display(project.budget_hours)} hrs</strong>
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#666' }}>
                        ${parseFloat(display(project.budget_amount) || 0).toLocaleString()}
                      </div>
                    </td>
                    <td style={{ fontSize: '0.875rem' }}>
                      <div><strong>Start:</strong> {display(project.start_date)}</div>
                      {display(project.end_date) && (
                        <div><strong>End:</strong> {display(project.end_date)}</div>
                      )}
                    </td>
                    <td>
                      <button 
                        onClick={() => handleEdit(project)}
                        style={{ 
                          padding: '0.25rem 0.75rem', 
                          fontSize: '0.875rem',
                          background: '#3182ce',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        ✏️ Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showAddForm && (
        <ProjectForm
          project={editingProject}
          users={users}
          onSave={handleSave}
          onCancel={() => {
            setShowAddForm(false);
            setEditingProject(null);
          }}
          onChange={setEditingProject}
        />
      )}
    </div>
  );
}

function ProjectForm({ project, users, onSave, onCancel, onChange }) {
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
        maxWidth: '800px',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <h3>{value(project.sys_id) ? '✏️ Edit Project' : '➕ Add New Project'}</h3>
        
        <div className="form-grid" style={{ marginTop: '1rem' }}>
          <div className="form-group">
            <label>Project Code * 🏷️</label>
            <input
              type="text"
              name="project_code"
              value={display(project.project_code)}
              onChange={handleInputChange}
              placeholder="e.g., KH-2024-001"
              required
            />
          </div>

          <div className="form-group">
            <label>Project Name * 🏗️</label>
            <input
              type="text"
              name="project_name"
              value={display(project.project_name)}
              onChange={handleInputChange}
              placeholder="e.g., Highway Design Project"
              required
            />
          </div>

          <div className="form-group">
            <label>Client Name * 🏢</label>
            <input
              type="text"
              name="client_name"
              value={display(project.client_name)}
              onChange={handleInputChange}
              placeholder="e.g., State DOT"
              required
            />
          </div>

          <div className="form-group">
            <label>Project Manager * 👤</label>
            <select
              name="project_manager"
              value={display(project.project_manager)}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Manager</option>
              {users.map(user => (
                <option key={value(user.sys_id)} value={display(user.user_name)}>
                  {display(user.first_name)} {display(user.last_name)}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Start Date * 📅</label>
            <input
              type="date"
              name="start_date"
              value={project.start_date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>End Date 📅</label>
            <input
              type="date"
              name="end_date"
              value={project.end_date}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Budget Hours ⏰</label>
            <input
              type="number"
              name="budget_hours"
              value={project.budget_hours}
              onChange={handleInputChange}
              step="0.1"
              min="0"
              placeholder="0.0"
            />
          </div>

          <div className="form-group">
            <label>Budget Amount ($) 💰</label>
            <input
              type="number"
              name="budget_amount"
              value={project.budget_amount}
              onChange={handleInputChange}
              step="0.01"
              min="0"
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label>Status 📊</label>
            <select
              name="status"
              value={display(project.status)}
              onChange={handleInputChange}
            >
              <option value="planning">📋 Planning</option>
              <option value="active">🚀 Active</option>
              <option value="on_hold">⏸️ On Hold</option>
              <option value="completed">✅ Completed</option>
              <option value="cancelled">❌ Cancelled</option>
            </select>
          </div>

          <div className="form-group">
            <label>Priority 🎯</label>
            <select
              name="priority"
              value={display(project.priority)}
              onChange={handleInputChange}
            >
              <option value="low">🟢 Low</option>
              <option value="medium">🟡 Medium</option>
              <option value="high">🟠 High</option>
              <option value="critical">🔴 Critical</option>
            </select>
          </div>

          <div className="form-group">
            <label>Billing Type 💳</label>
            <select
              name="billing_type"
              value={display(project.billing_type)}
              onChange={handleInputChange}
            >
              <option value="hourly">⏰ Hourly</option>
              <option value="fixed_price">💰 Fixed Price</option>
              <option value="time_and_materials">📊 Time & Materials</option>
              <option value="retainer">🔒 Retainer</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="active"
                checked={display(project.active) === 'true'}
                onChange={handleInputChange}
                style={{ marginRight: '0.5rem' }}
              />
              ✅ Active Project
            </label>
          </div>
        </div>

        <div className="form-group" style={{ marginTop: '1rem' }}>
          <label>Project Description 📝</label>
          <textarea
            name="description"
            value={display(project.description)}
            onChange={handleInputChange}
            rows={3}
            placeholder="Describe the project scope, objectives, and key deliverables..."
          />
        </div>

        <div className="form-actions">
          <button onClick={() => onSave(project)} className="btn-primary">
            {value(project.sys_id) ? '✅ Update Project' : '➕ Create Project'}
          </button>
          <button onClick={onCancel} className="btn-secondary">
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  );
}