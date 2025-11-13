import React, { useState, useEffect } from 'react';

// Import CSS first
import './app.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error Boundary caught:', error, errorInfo);
    this.setState({ error: error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', border: '1px solid red', margin: '20px' }}>
          <h2>⚠️ Component Error</h2>
          <p>A component encountered an error: {this.state.error?.message}</p>
          <button onClick={() => window.location.reload()} style={{ marginTop: '10px', padding: '8px 16px' }}>
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy load components with fallbacks
const TimeEntryForm = React.lazy(() => 
  import('./components/TimeEntryForm.jsx').catch(() => ({
    default: () => <div>Time Entry Form loading...</div>
  }))
);

const TimeEntryList = React.lazy(() => 
  import('./components/TimeEntryList.jsx').catch(() => ({
    default: () => <div>Timesheet loading...</div>
  }))
);

const Analytics = React.lazy(() => 
  import('./components/Analytics.jsx').catch(() => ({
    default: () => <div>Analytics loading...</div>
  }))
);

const ProjectList = React.lazy(() => 
  import('./components/ProjectList.jsx').catch(() => ({
    default: () => <div>Projects loading...</div>
  }))
);

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Shared state for time entries and projects
  const [timeEntries, setTimeEntries] = useState([]);
  const [projects, setProjects] = useState([]);

  // Initialize demo data
  const getDemoTimeEntries = () => [
    {
      sys_id: { display_value: 'demo-entry-1', value: 'demo-entry-1' },
      project_code: { display_value: 'KH-2024-001', value: 'KH-2024-001' },
      client_name: { display_value: 'State DOT', value: 'State DOT' },
      task_description: { display_value: 'Highway alignment design review and optimization', value: 'Highway alignment design review and optimization' },
      work_date: { display_value: '2024-12-19', value: '2024-12-19' },
      start_time: { display_value: '2024-12-19 09:00:00', value: '2024-12-19 09:00:00' },
      end_time: { display_value: '2024-12-19 12:30:00', value: '2024-12-19 12:30:00' },
      hours_worked: { display_value: '3.5', value: '3.5' },
      work_type: { display_value: 'design', value: 'design' },
      billable: { display_value: 'true', value: 'true' },
      status: { display_value: 'draft', value: 'draft' },
      employee: { display_value: 'demo-user-001', value: 'demo-user-001' }
    },
    {
      sys_id: { display_value: 'demo-entry-2', value: 'demo-entry-2' },
      project_code: { display_value: 'KH-2024-002', value: 'KH-2024-002' },
      client_name: { display_value: 'City Transportation', value: 'City Transportation' },
      task_description: { display_value: 'Bridge structural inspection and condition assessment documentation', value: 'Bridge structural inspection and condition assessment documentation' },
      work_date: { display_value: '2024-12-18', value: '2024-12-18' },
      start_time: { display_value: '2024-12-18 13:00:00', value: '2024-12-18 13:00:00' },
      end_time: { display_value: '2024-12-18 17:00:00', value: '2024-12-18 17:00:00' },
      hours_worked: { display_value: '4.0', value: '4.0' },
      work_type: { display_value: 'field_work', value: 'field_work' },
      billable: { display_value: 'true', value: 'true' },
      status: { display_value: 'submitted', value: 'submitted' },
      employee: { display_value: 'demo-user-001', value: 'demo-user-001' }
    },
    {
      sys_id: { display_value: 'demo-entry-3', value: 'demo-entry-3' },
      project_code: { display_value: 'KH-2024-003', value: 'KH-2024-003' },
      client_name: { display_value: 'County Planning Department', value: 'County Planning Department' },
      task_description: { display_value: 'Environmental impact assessment stakeholder meeting', value: 'Environmental impact assessment stakeholder meeting' },
      work_date: { display_value: '2024-12-17', value: '2024-12-17' },
      start_time: { display_value: '2024-12-17 10:00:00', value: '2024-12-17 10:00:00' },
      end_time: { display_value: '2024-12-17 11:30:00', value: '2024-12-17 11:30:00' },
      hours_worked: { display_value: '1.5', value: '1.5' },
      work_type: { display_value: 'meeting', value: 'meeting' },
      billable: { display_value: 'false', value: 'false' },
      status: { display_value: 'approved', value: 'approved' },
      employee: { display_value: 'demo-user-001', value: 'demo-user-001' }
    }
  ];

  const getDemoProjects = () => [
    {
      sys_id: { display_value: 'demo-proj-1', value: 'demo-proj-1' },
      project_code: { display_value: 'KH-2024-001', value: 'KH-2024-001' },
      project_name: { display_value: 'Highway Design Project', value: 'Highway Design Project' },
      client_name: { display_value: 'State DOT', value: 'State DOT' }
    },
    {
      sys_id: { display_value: 'demo-proj-2', value: 'demo-proj-2' },
      project_code: { display_value: 'KH-2024-002', value: 'KH-2024-002' },
      project_name: { display_value: 'Bridge Inspection Program', value: 'Bridge Inspection Program' },
      client_name: { display_value: 'City Transportation', value: 'City Transportation' }
    },
    {
      sys_id: { display_value: 'demo-proj-3', value: 'demo-proj-3' },
      project_code: { display_value: 'KH-2024-003', value: 'KH-2024-003' },
      project_name: { display_value: 'Environmental Impact Study', value: 'Environmental Impact Study' },
      client_name: { display_value: 'County Planning Department', value: 'County Planning Department' }
    },
    {
      sys_id: { display_value: 'demo-proj-4', value: 'demo-proj-4' },
      project_code: { display_value: 'KH-2024-004', value: 'KH-2024-004' },
      project_name: { display_value: 'Traffic Signal Upgrade', value: 'Traffic Signal Upgrade' },
      client_name: { display_value: 'Metropolitan Authority', value: 'Metropolitan Authority' }
    },
    {
      sys_id: { display_value: 'demo-proj-5', value: 'demo-proj-5' },
      project_code: { display_value: 'KH-2024-005', value: 'KH-2024-005' },
      project_name: { display_value: 'Stormwater Management', value: 'Stormwater Management' },
      client_name: { display_value: 'Municipal Water District', value: 'Municipal Water District' }
    }
  ];

  useEffect(() => {
    console.log('App component mounted - initializing with demo data...');
    
    const initializeApp = () => {
      const demoUser = {
        sys_id: { display_value: 'demo-user-001', value: 'demo-user-001' },
        user_name: { display_value: 'demo.user', value: 'demo.user' },
        first_name: { display_value: 'Demo', value: 'Demo' },
        last_name: { display_value: 'User', value: 'User' },
        email: { display_value: 'demo.user@kimleyhorn.com', value: 'demo.user@kimleyhorn.com' }
      };
      
      setUser(demoUser);
      setTimeEntries(getDemoTimeEntries());
      setProjects(getDemoProjects());
      setLoading(false);
      console.log('Application initialized with demo data successfully');
    };

    setTimeout(initializeApp, 100);
  }, []);

  // Functions to manage time entries
  const addTimeEntry = (entryData) => {
    const newEntry = {
      sys_id: { 
        display_value: `demo-entry-${Date.now()}`, 
        value: `demo-entry-${Date.now()}` 
      },
      project_code: { display_value: entryData.project_code, value: entryData.project_code },
      client_name: { display_value: entryData.client_name, value: entryData.client_name },
      task_description: { display_value: entryData.task_description, value: entryData.task_description },
      work_date: { display_value: entryData.work_date, value: entryData.work_date },
      start_time: { display_value: entryData.start_time, value: entryData.start_time },
      end_time: { display_value: entryData.end_time, value: entryData.end_time },
      hours_worked: { display_value: entryData.hours_worked, value: entryData.hours_worked },
      work_type: { display_value: entryData.work_type, value: entryData.work_type },
      billable: { display_value: entryData.billable.toString(), value: entryData.billable.toString() },
      status: { display_value: 'draft', value: 'draft' },
      employee: { display_value: user?.sys_id?.value || 'demo-user-001', value: user?.sys_id?.value || 'demo-user-001' }
    };

    setTimeEntries(prev => [newEntry, ...prev]);
    console.log('New time entry added:', newEntry);
  };

  const updateTimeEntry = (entryId, updatedData) => {
    setTimeEntries(prev => prev.map(entry => {
      if (entry.sys_id.value === entryId) {
        return {
          ...entry,
          project_code: { display_value: updatedData.project_code, value: updatedData.project_code },
          client_name: { display_value: updatedData.client_name, value: updatedData.client_name },
          task_description: { display_value: updatedData.task_description, value: updatedData.task_description },
          work_date: { display_value: updatedData.work_date, value: updatedData.work_date },
          start_time: { display_value: updatedData.start_time, value: updatedData.start_time },
          end_time: { display_value: updatedData.end_time, value: updatedData.end_time },
          hours_worked: { display_value: updatedData.hours_worked, value: updatedData.hours_worked },
          work_type: { display_value: updatedData.work_type, value: updatedData.work_type },
          billable: { display_value: updatedData.billable.toString(), value: updatedData.billable.toString() }
        };
      }
      return entry;
    }));
    console.log('Time entry updated:', entryId);
  };

  const deleteTimeEntry = (entryId) => {
    setTimeEntries(prev => prev.filter(entry => entry.sys_id.value !== entryId));
    console.log('Time entry deleted:', entryId);
  };

  // Loading state
  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <div style={{
          background: 'linear-gradient(135deg, #2c5282, #3182ce)',
          color: 'white',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h1>🕒 Kimley Horn Time Collection</h1>
          <p>Initializing application...</p>
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>
          <p>Setting up demo workspace...</p>
        </div>
      </div>
    );
  }

  // Navigation component
  const renderNavigation = () => (
    <nav className="nav-bar">
      <div className="nav-brand">
        <h1>Kimley Horn Time Collection</h1>
      </div>
      <div className="nav-links">
        <button 
          className={currentView === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={currentView === 'entry' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('entry')}
        >
          New Entry
        </button>
        <button 
          className={currentView === 'timesheet' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('timesheet')}
        >
          My Timesheet
        </button>
        <button 
          className={currentView === 'analytics' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('analytics')}
        >
          Analytics
        </button>
        <button 
          className={currentView === 'projects' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('projects')}
        >
          Projects
        </button>
      </div>
      {user && (
        <div className="user-info">
          Welcome, {user.first_name?.display_value || 'User'} {user.last_name?.display_value || ''}
        </div>
      )}
    </nav>
  );

  // Content rendering
  const renderContent = () => {
    return (
      <React.Suspense fallback={
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
          }}>
            <p>Loading component...</p>
          </div>
        </div>
      }>
        <ErrorBoundary>
          {(() => {
            switch(currentView) {
              case 'entry':
                return (
                  <TimeEntryForm 
                    onEntryAdded={addTimeEntry} 
                    user={user} 
                    projects={projects}
                  />
                );
              case 'timesheet':
                return (
                  <TimeEntryList 
                    user={user} 
                    timeEntries={timeEntries}
                    onUpdateEntry={updateTimeEntry}
                    onDeleteEntry={deleteTimeEntry}
                  />
                );
              case 'analytics':
                return <Analytics user={user} timeEntries={timeEntries} />;
              case 'projects':
                return <ProjectList />;
              default:
                const totalEntries = timeEntries.length;
                const totalHours = timeEntries.reduce((sum, entry) => 
                  sum + parseFloat(entry.hours_worked?.display_value || 0), 0
                );
                const activeProjects = projects.length;

                return (
                  <div className="dashboard">
                    <div style={{
                      background: 'white',
                      padding: '2rem',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      marginBottom: '2rem'
                    }}>
                      <h2 style={{ marginBottom: '1rem' }}>Welcome to Kimley Horn Time Collection</h2>
                      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                        Professional time tracking and project management system for engineering consultants.
                      </p>
                      <div style={{
                        background: '#f7fafc',
                        padding: '1rem',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0'
                      }}>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#2d3748' }}>
                          <strong>📋 Demo Mode:</strong> This application uses live state management. 
                          New entries will appear in timesheet and analytics immediately!
                        </p>
                      </div>
                    </div>

                    <div className="dashboard-grid">
                      <div className="dashboard-card">
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏱️</div>
                        <h3>Quick Entry</h3>
                        <p>Log your time quickly and efficiently</p>
                        <button onClick={() => setCurrentView('entry')}>Start Logging Time</button>
                      </div>
                      <div className="dashboard-card">
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📋</div>
                        <h3>My Timesheet</h3>
                        <p>View and edit your time entries</p>
                        <button onClick={() => setCurrentView('timesheet')}>View Timesheet</button>
                      </div>
                      <div className="dashboard-card">
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                        <h3>Analytics</h3>
                        <p>Track productivity and utilization</p>
                        <button onClick={() => setCurrentView('analytics')}>View Analytics</button>
                      </div>
                      <div className="dashboard-card">
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏗️</div>
                        <h3>Projects</h3>
                        <p>Manage project information and budgets</p>
                        <button onClick={() => setCurrentView('projects')}>View Projects</button>
                      </div>
                    </div>
                    
                    {/* Live Stats */}
                    <div style={{
                      marginTop: '2rem',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem'
                    }}>
                      <div style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3182ce' }}>
                          {totalEntries}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#666' }}>Time Entries</div>
                      </div>
                      <div style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#38a169' }}>
                          {totalHours.toFixed(1)}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#666' }}>Total Hours</div>
                      </div>
                      <div style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ed8936' }}>
                          {activeProjects}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#666' }}>Active Projects</div>
                      </div>
                    </div>

                    {/* Getting Started */}
                    <div style={{
                      marginTop: '2rem',
                      background: 'white',
                      padding: '2rem',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      <h3 style={{ marginBottom: '1rem' }}>🚀 Getting Started</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        <div>
                          <h4 style={{ color: '#3182ce', marginBottom: '0.5rem' }}>1. Log Your Time</h4>
                          <p style={{ fontSize: '0.9rem', color: '#666' }}>
                            Create new time entries and watch them appear instantly in your timesheet and analytics.
                          </p>
                        </div>
                        <div>
                          <h4 style={{ color: '#3182ce', marginBottom: '0.5rem' }}>2. Review Timesheet</h4>
                          <p style={{ fontSize: '0.9rem', color: '#666' }}>
                            Edit and manage your time entries with real-time updates across all views.
                          </p>
                        </div>
                        <div>
                          <h4 style={{ color: '#3182ce', marginBottom: '0.5rem' }}>3. Track Progress</h4>
                          <p style={{ fontSize: '0.9rem', color: '#666' }}>
                            Monitor utilization rates and project progress with live analytics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            }
          })()}
        </ErrorBoundary>
      </React.Suspense>
    );
  };

  return (
    <ErrorBoundary>
      <div className="app">
        {renderNavigation()}
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </ErrorBoundary>
  );
}