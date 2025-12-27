import { useState, useEffect, createElement } from '@wordpress/element';

function FreeSettings() {
  const [settings, setSettings] = useState({
    general_enable_feature: true,
    general_max_items: 10,
    general_cache_duration: 3600,
    general_email_notifications: false,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  // Load settings on mount
  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const response = await fetch(
        `${window.ExampleConfig.rest}example/v1/settings/general`,
        {
          headers: {
            'X-WP-Nonce': window.ExampleConfig.nonce,
          },
        }
      );

      const data = await response.json();

      if (data.success && data.settings) {
        setSettings(prev => ({
          ...prev,
          ...data.settings,
        }));
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch(
        `${window.ExampleConfig.rest}example/v1/settings/general`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': window.ExampleConfig.nonce,
          },
          body: JSON.stringify({
            settings: settings,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: data.message || 'Settings saved!' });
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to save settings' });
      }
    } catch (error) {
      console.error('Failed to save settings:', error);
      setMessage({ type: 'error', text: 'An error occurred while saving' });
    } finally {
      setSaving(false);
      // Clear message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  if (loading) {
    return <div className="notice notice-info"><p>Loading settings...</p></div>;
  }

  return (
    <div>
      {message && (
        <div className={`notice notice-${message.type} is-dismissible`}>
          <p><strong>{message.text}</strong></p>
        </div>
      )}

      <div style={{
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <h2 style={{ marginTop: 0 }}>General Settings (Free)</h2>
        
        <table className="form-table">
          <tbody>
            <tr>
              <th scope="row">
                <label>Enable Feature</label>
              </th>
              <td>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input 
                    type="checkbox" 
                    checked={settings.general_enable_feature}
                    onChange={(e) => handleChange('general_enable_feature', e.target.checked)}
                  />
                  <span>Enable main plugin feature</span>
                </label>
                <p className="description">
                  Turn on/off the main functionality.
                </p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <label htmlFor="max-items">Max Items</label>
              </th>
              <td>
                <input 
                  type="number" 
                  id="max-items"
                  className="regular-text"
                  value={settings.general_max_items}
                  onChange={(e) => handleChange('general_max_items', parseInt(e.target.value))}
                  min="1"
                  max="100"
                />
                <p className="description">
                  Maximum number of items to display (1-100).
                </p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <label htmlFor="cache-duration">Cache Duration</label>
              </th>
              <td>
                <input 
                  type="number" 
                  id="cache-duration"
                  className="regular-text"
                  value={settings.general_cache_duration}
                  onChange={(e) => handleChange('general_cache_duration', parseInt(e.target.value))}
                />
                <p className="description">
                  Cache duration in seconds.
                </p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <label>Email Notifications</label>
              </th>
              <td>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input 
                    type="checkbox" 
                    checked={settings.general_email_notifications}
                    onChange={(e) => handleChange('general_email_notifications', e.target.checked)}
                  />
                  <span>Send email notifications</span>
                </label>
                <p className="description">
                  Receive email alerts for important events.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{
        background: '#f0f6fc',
        border: '1px solid #c3dafe',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '20px'
      }}>
        <p style={{ margin: 0 }}>
          <strong>💡 Pro Tip:</strong> Upgrade to Pro to unlock advanced settings, 
          automation features, API access, and more!
        </p>
      </div>

      <p className="submit">
        <button 
          className="button button-primary button-large"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </p>
    </div>
  );
}

export default FreeSettings;