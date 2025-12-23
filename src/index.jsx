import { createRoot } from '@wordpress/element';

function FreeApp() {
  return (
    <>
      <h1>Example – Free</h1>
      <p>Upgrade to Pro to unlock more features.</p>
    </>
  );
}

createRoot(
  document.getElementById('example-admin-root')
).render(<FreeApp />);
