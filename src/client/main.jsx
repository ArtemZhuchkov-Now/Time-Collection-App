import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';

console.log('Loading Kimley Horn Time Collection App...');

try {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
        throw new Error('Root element not found');
    }
    
    console.log('Root element found, initializing full application...');
    const root = ReactDOM.createRoot(rootElement);
    
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    
    console.log('Full application rendered successfully');
} catch (error) {
    console.error('Failed to initialize application:', error);
    
    // Fallback to simple version
    const rootElement = document.getElementById("root");
    if (rootElement) {
        rootElement.innerHTML = `
            <div style="padding: 20px; border: 1px solid orange; margin: 20px; font-family: Arial, sans-serif;">
                <h2 style="color: orange;">⚠️ Application Loading Issue</h2>
                <p>The full Kimley Horn time collection application encountered an error.</p>
                <p><strong>Error:</strong> ${error.message}</p>
                <div style="margin: 20px 0;">
                    <button onclick="window.location.reload()" style="padding: 10px 20px; margin-right: 10px; background: #3182ce; color: white; border: none; border-radius: 4px;">
                        Try Again
                    </button>
                    <button onclick="console.log('Error details:', arguments)" style="padding: 10px 20px; background: #e2e8f0; border: none; border-radius: 4px;">
                        View Console
                    </button>
                </div>
                <details style="margin-top: 20px;">
                    <summary>Technical Details</summary>
                    <pre style="background: #f5f5f5; padding: 10px; margin-top: 10px; font-size: 12px;">${error.stack || 'No stack trace available'}</pre>
                </details>
            </div>
        `;
    }
}