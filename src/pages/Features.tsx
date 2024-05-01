import './Features.css'

const Features = () => {
  return (
    <div className="features">
      <h2>Features</h2>
      <div className="feature">
        <h3>URL Shortening</h3>
        <p>Shorten long URLs into concise, shareable links with a single click.</p>
      </div>
      <div className="feature">
        <h3>Link Management</h3>
        <p>Track and manage your shortened links with ease.</p>
      </div>
      <div className="feature">
        <h3>Analytics</h3>
        <p>Gain insights into link performance with detailed analytics and statistics.</p>
      </div>
      <div className="feature">
        <h3>Customization</h3>
        <p>Customize your shortened links to make them unique and memorable.</p>
      </div>
      <div className="feature">
        <h3>Security</h3>
        <p>Ensure the security of your links with robust authentication and authorization features.</p>
      </div>
    </div>
  );
};

export default Features;
