
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {/* Card 1: Create Invoice */}
        <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Create Invoice</h2>
          <p>Create a new invoice for order delivery.</p>
          <Link to="/invoice">Go to Create Invoice</Link>
        </div>

        {/* Card 2: Driver Earnings */}
        <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Driver Earnings</h2>
          <p>View earnings summary for each driver.</p>
          {/* Add link or button to navigate to driver earnings page */}
        </div>

        {/* Card 3: Store History */}
        <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Store History</h2>
          <p>View history of orders for each store.</p>
          {/* Add link or button to navigate to store history page */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
