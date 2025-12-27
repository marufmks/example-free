function Dashboard() {
  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: '#fff',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#fff' }}>
          Welcome to Example Plugin! 👋
        </h2>
        <p style={{ margin: 0, fontSize: '16px', opacity: 0.95 }}>
          You're using the free version. Upgrade to Pro to unlock premium features.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '10px' }}>📊</div>
          <h3 style={{ margin: '0 0 5px 0' }}>234</h3>
          <p style={{ margin: 0, color: '#666' }}>Total Items</p>
        </div>

        <div style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '10px' }}>✅</div>
          <h3 style={{ margin: '0 0 5px 0' }}>85%</h3>
          <p style={{ margin: 0, color: '#666' }}>Success Rate</p>
        </div>

        <div style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          position: 'relative',
          opacity: 0.6
        }}>
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#f59e0b',
            color: '#fff',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 'bold'
          }}>
            PRO
          </div>
          <div style={{ fontSize: '36px', marginBottom: '10px' }}>⚡</div>
          <h3 style={{ margin: '0 0 5px 0' }}>—</h3>
          <p style={{ margin: 0, color: '#666' }}>Automations</p>
        </div>

        <div style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          position: 'relative',
          opacity: 0.6
        }}>
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#f59e0b',
            color: '#fff',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 'bold'
          }}>
            PRO
          </div>
          <div style={{ fontSize: '36px', marginBottom: '10px' }}>📈</div>
          <h3 style={{ margin: '0 0 5px 0' }}>—</h3>
          <p style={{ margin: 0, color: '#666' }}>Analytics</p>
        </div>
      </div>

      {/* Upgrade to Pro Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        color: '#fff',
        padding: '25px',
        borderRadius: '8px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div>
          <h3 style={{ margin: '0 0 8px 0', color: '#fff', fontSize: '20px' }}>
            🚀 Upgrade to Pro
          </h3>
          <p style={{ margin: 0, opacity: 0.95 }}>
            Unlock advanced analytics, automation, API access, priority support, and more!
          </p>
        </div>
        <button 
          className="button button-large"
          style={{
            background: '#fff',
            color: '#d97706',
            borderColor: '#fff',
            fontWeight: 'bold',
            padding: '8px 20px',
            height: 'auto'
          }}
          onClick={() => window.open('https://example.com/upgrade', '_blank')}
        >
          Upgrade Now →
        </button>
      </div>

      <div style={{
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <h3>Quick Actions</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button className="button button-primary">
            Create New Item
          </button>
          <button className="button">
            View All Items
          </button>
          <button className="button">
            Import Data
          </button>
        </div>
      </div>

      <div style={{
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px'
      }}>
        <h3>Pro Features Preview</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          <div style={{
            padding: '15px',
            background: '#f9fafb',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📊</div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Advanced Analytics</h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
              Detailed insights & reports
            </p>
            <span style={{
              display: 'inline-block',
              marginTop: '8px',
              background: '#f59e0b',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: '3px',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>
              PRO
            </span>
          </div>

          <div style={{
            padding: '15px',
            background: '#f9fafb',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚡</div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Automation</h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
              Automate workflows
            </p>
            <span style={{
              display: 'inline-block',
              marginTop: '8px',
              background: '#f59e0b',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: '3px',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>
              PRO
            </span>
          </div>

          <div style={{
            padding: '15px',
            background: '#f9fafb',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔌</div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>API Access</h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
              Full REST API integration
            </p>
            <span style={{
              display: 'inline-block',
              marginTop: '8px',
              background: '#f59e0b',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: '3px',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>
              PRO
            </span>
          </div>

          <div style={{
            padding: '15px',
            background: '#f9fafb',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Priority Support</h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
              24/7 dedicated support
            </p>
            <span style={{
              display: 'inline-block',
              marginTop: '8px',
              background: '#f59e0b',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: '3px',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>
              PRO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;