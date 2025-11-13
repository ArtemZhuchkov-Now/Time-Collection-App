import React, { useState, useEffect } from 'react';
import { display } from '../utils/fields.js';

export default function Analytics({ user, timeEntries }) {
  const [analytics, setAnalytics] = useState({
    totalHours: 0,
    billableHours: 0,
    nonBillableHours: 0,
    totalEntries: 0,
    avgHoursPerDay: 0,
    topProjects: [],
    workTypeBreakdown: [],
    weeklyHours: []
  });
  const [dateRange, setDateRange] = useState('30');

  useEffect(() => {
    calculateAnalytics();
  }, [timeEntries, dateRange]);

  const calculateAnalytics = () => {
    if (!timeEntries || timeEntries.length === 0) {
      setAnalytics({
        totalHours: 0,
        billableHours: 0,
        nonBillableHours: 0,
        totalEntries: 0,
        avgHoursPerDay: 0,
        topProjects: [],
        workTypeBreakdown: [],
        weeklyHours: []
      });
      return;
    }

    // Filter entries by date range
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - parseInt(dateRange));
    const fromDate = daysAgo.toISOString().split('T')[0];

    const filteredEntries = timeEntries.filter(entry => {
      const entryDate = display(entry.work_date);
      return entryDate >= fromDate;
    });

    // Calculate basic metrics
    const totalHours = filteredEntries.reduce((sum, entry) => sum + parseFloat(display(entry.hours_worked) || 0), 0);
    const billableEntries = filteredEntries.filter(entry => display(entry.billable) === 'true');
    const billableHours = billableEntries.reduce((sum, entry) => sum + parseFloat(display(entry.hours_worked) || 0), 0);
    const nonBillableHours = totalHours - billableHours;

    // Project breakdown
    const projectMap = {};
    filteredEntries.forEach(entry => {
      const projectCode = display(entry.project_code);
      const hours = parseFloat(display(entry.hours_worked) || 0);
      if (projectMap[projectCode]) {
        projectMap[projectCode].hours += hours;
        projectMap[projectCode].entries += 1;
      } else {
        projectMap[projectCode] = {
          projectCode,
          clientName: display(entry.client_name),
          hours,
          entries: 1
        };
      }
    });
    const topProjects = Object.values(projectMap)
      .sort((a, b) => b.hours - a.hours)
      .slice(0, 5);

    // Work type breakdown
    const workTypeMap = {};
    filteredEntries.forEach(entry => {
      const workType = display(entry.work_type);
      const hours = parseFloat(display(entry.hours_worked) || 0);
      workTypeMap[workType] = (workTypeMap[workType] || 0) + hours;
    });
    const workTypeBreakdown = Object.entries(workTypeMap)
      .map(([type, hours]) => ({ type, hours }))
      .sort((a, b) => b.hours - a.hours);

    // Weekly hours (last 4 weeks)
    const weeklyHours = [];
    for (let i = 3; i >= 0; i--) {
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - (i * 7 + weekStart.getDay()));
      weekStart.setHours(0, 0, 0, 0);
      
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);
      weekEnd.setHours(23, 59, 59, 999);

      const weekEntries = filteredEntries.filter(entry => {
        const entryDate = new Date(display(entry.work_date));
        return entryDate >= weekStart && entryDate <= weekEnd;
      });

      const weekHours = weekEntries.reduce((sum, entry) => sum + parseFloat(display(entry.hours_worked) || 0), 0);
      
      weeklyHours.push({
        week: `${weekStart.getMonth() + 1}/${weekStart.getDate()}`,
        hours: weekHours
      });
    }

    const avgHoursPerDay = totalHours > 0 ? totalHours / parseInt(dateRange) : 0;

    setAnalytics({
      totalHours,
      billableHours,
      nonBillableHours,
      totalEntries: filteredEntries.length,
      avgHoursPerDay,
      topProjects,
      workTypeBreakdown,
      weeklyHours
    });
  };

  const utilizationRate = analytics.totalHours > 0 ? (analytics.billableHours / analytics.totalHours * 100) : 0;

  const getWorkTypeEmoji = (type) => {
    const emojis = {
      design: '🎨',
      analysis: '🔍',
      consultation: '💬',
      field_work: '🏗️',
      documentation: '📋',
      meeting: '🤝',
      travel: '🚗',
      administrative: '📊'
    };
    return emojis[type] || '⚡';
  };

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
          <strong>🔄 Live Analytics:</strong> Charts and metrics update automatically as you add or modify time entries.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2>📊 Time Analytics</h2>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>
            Real-time productivity insights and utilization tracking
          </p>
        </div>
        <select 
          value={dateRange} 
          onChange={(e) => setDateRange(e.target.value)}
          style={{ 
            padding: '0.5rem 1rem', 
            borderRadius: '6px', 
            border: '1px solid #e2e8f0',
            background: 'white'
          }}
        >
          <option value="7">📅 Last 7 days</option>
          <option value="30">📅 Last 30 days</option>
          <option value="90">📅 Last 90 days</option>
          <option value="365">📅 Last year</option>
        </select>
      </div>

      <div className="analytics-grid">
        <div className="metric-card">
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⏰</div>
          <div className="metric-value">{analytics.totalHours.toFixed(1)}</div>
          <div className="metric-label">Total Hours</div>
        </div>

        <div className="metric-card">
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💰</div>
          <div className="metric-value">{analytics.billableHours.toFixed(1)}</div>
          <div className="metric-label">Billable Hours</div>
        </div>

        <div className="metric-card">
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📈</div>
          <div className="metric-value" style={{ color: utilizationRate > 80 ? '#38a169' : utilizationRate > 60 ? '#ed8936' : '#e53e3e' }}>
            {utilizationRate.toFixed(1)}%
          </div>
          <div className="metric-label">Utilization Rate</div>
        </div>

        <div className="metric-card">
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📊</div>
          <div className="metric-value">{analytics.avgHoursPerDay.toFixed(1)}</div>
          <div className="metric-label">Avg Hours/Day</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {/* Top Projects */}
        <div className="table-container">
          <div style={{ padding: '1rem' }}>
            <h3>🏗️ Top Projects</h3>
            {analytics.topProjects.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Hours</th>
                    <th>Entries</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.topProjects.map((project, index) => (
                    <tr key={index}>
                      <td><strong>{project.projectCode}</strong></td>
                      <td>{project.clientName}</td>
                      <td><strong>{project.hours.toFixed(1)}</strong></td>
                      <td>{project.entries}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ padding: '1rem', color: '#718096' }}>No project data available for selected period</p>
            )}
          </div>
        </div>

        {/* Work Type Breakdown */}
        <div className="table-container">
          <div style={{ padding: '1rem' }}>
            <h3>⚡ Work Type Distribution</h3>
            {analytics.workTypeBreakdown.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Work Type</th>
                    <th>Hours</th>
                    <th>% of Total</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.workTypeBreakdown.map((workType, index) => {
                    const percentage = analytics.totalHours > 0 ? (workType.hours / analytics.totalHours * 100) : 0;
                    return (
                      <tr key={index}>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {getWorkTypeEmoji(workType.type)}
                          <span style={{ textTransform: 'capitalize' }}>
                            {workType.type?.replace('_', ' ')}
                          </span>
                        </td>
                        <td><strong>{workType.hours.toFixed(1)}</strong></td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{
                              width: '50px',
                              height: '8px',
                              background: '#e2e8f0',
                              borderRadius: '4px',
                              overflow: 'hidden'
                            }}>
                              <div style={{
                                width: `${percentage}%`,
                                height: '100%',
                                background: '#3182ce',
                                borderRadius: '4px'
                              }}></div>
                            </div>
                            {percentage.toFixed(1)}%
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p style={{ padding: '1rem', color: '#718096' }}>No work type data available for selected period</p>
            )}
          </div>
        </div>
      </div>

      {/* Weekly Trend */}
      <div className="table-container" style={{ marginTop: '2rem' }}>
        <div style={{ padding: '1rem' }}>
          <h3>📈 Weekly Hours Trend</h3>
          <div style={{ display: 'flex', gap: '1rem', padding: '2rem', justifyContent: 'center' }}>
            {analytics.weeklyHours.map((week, index) => {
              const maxHeight = Math.max(...analytics.weeklyHours.map(w => w.hours), 1);
              const height = maxHeight > 0 ? Math.max((week.hours / maxHeight) * 100, 10) : 10;
              
              return (
                <div key={index} style={{ textAlign: 'center', flex: 1, maxWidth: '100px' }}>
                  <div style={{ 
                    height: `${height}px`, 
                    background: week.hours > 0 ? 'linear-gradient(45deg, #3182ce, #63b3ed)' : '#e2e8f0',
                    marginBottom: '0.5rem',
                    borderRadius: '4px 4px 0 0',
                    minHeight: '20px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}>
                    {week.hours > 0 ? week.hours.toFixed(0) : ''}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>{week.hours.toFixed(1)}h</div>
                  <div style={{ fontSize: '0.75rem', color: '#718096' }}>Week {week.week}</div>
                </div>
              );
            })}
          </div>
          
          {/* Insights */}
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            background: '#f7fafc',
            borderRadius: '6px'
          }}>
            <h4 style={{ marginBottom: '0.5rem', color: '#2d3748' }}>💡 Live Insights</h4>
            <div style={{ fontSize: '0.875rem', color: '#4a5568' }}>
              {analytics.totalEntries > 0 ? (
                <>
                  <p>• Utilization rate of {utilizationRate.toFixed(0)}% {utilizationRate > 75 ? '(Excellent! 🎉)' : utilizationRate > 60 ? '(Good 👍)' : '(Needs improvement 📈)'}</p>
                  <p>• Average of {analytics.avgHoursPerDay.toFixed(1)} hours logged per day</p>
                  <p>• {analytics.topProjects.length} active projects tracked</p>
                  <p>• {((analytics.billableHours / analytics.totalHours) * 100 || 0).toFixed(0)}% of time is billable</p>
                  <p>• {analytics.totalEntries} total entries in selected period</p>
                </>
              ) : (
                <p>• No time entries found for the selected period. Try a different date range or add some time entries!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}