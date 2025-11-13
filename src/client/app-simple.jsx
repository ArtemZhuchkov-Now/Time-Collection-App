import React, { useState, useEffect } from 'react';

// Simple test component to verify React is working
function SimpleApp() {
  const [message, setMessage] = useState('Loading...');
  
  useEffect(() => {
    console.log('SimpleApp mounted');
    setMessage('Kimley Horn Time Collection - Application Loaded Successfully!');
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #2c5282, #3182ce)',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h1>🕒 {message}</h1>
        <p>ServiceNow Time Tracking System</p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Time Entry</h3>
          <p style={{ color: '#718096', marginBottom: '1.5rem' }}>Log your work hours</p>
          <button style={{
            background: '#3182ce',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500'
          }} onClick={() => alert('Time entry feature coming soon!')}>
            Start Logging
          </button>
        </div>
        
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>My Timesheet</h3>
          <p style={{ color: '#718096', marginBottom: '1.5rem' }}>View and edit entries</p>
          <button style={{
            background: '#3182ce',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500'
          }} onClick={() => alert('Timesheet feature coming soon!')}>
            View Timesheet
          </button>
        </div>

        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Analytics</h3>
          <p style={{ color: '#718096', marginBottom: '1.5rem' }}>Track productivity</p>
          <button style={{
            background: '#3182ce',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500'
          }} onClick={() => alert('Analytics feature coming soon!')}>
            View Analytics
          </button>
        </div>

        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Projects</h3>
          <p style={{ color: '#718096', marginBottom: '1.5rem' }}>Manage project info</p>
          <button style={{
            background: '#3182ce',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500'
          }} onClick={() => alert('Projects feature coming soon!')}>
            View Projects
          </button>
        </div>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3>System Status</h3>
        <p>✅ React Application Loaded</p>
        <p>✅ ServiceNow UI Page Active</p>
        <p>✅ Ready for Time Collection</p>
        
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
          <p><strong>User:</strong> {window.g_user?.userName || 'Not available'}</p>
          <p><strong>Session:</strong> {window.g_ck ? 'Authenticated' : 'Not authenticated'}</p>
          <p><strong>Time:</strong> {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default SimpleApp;