// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors())

app.get('/api/test', (req, res) => {
    return res.json({
        test: 'Hello World'
    });
});

// Routes
app.post('/api/invoice', (req, res) => {
  try {
    // Extract data from the request body
    const {
      orderId,
      deliveryDriver,
      customerName,
      customerAddress,
      totalAmount,
      deliveryCharge,
      tip,
      store,
    } = req.body;
    console.log(req);

    // Display the data received from the client
    const invoiceData = {
      orderId,
      deliveryDriver,
      customerName,
      customerAddress,
      totalAmount,
      deliveryCharge,
      tip,
      store,
    };

    console.log('Received data from client:', invoiceData);
    return res.status(201).json({ msg: 'Data received successfully' });
  } catch (error) {
    console.error('Error receiving data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/orders', (req, res) => {
  try {
    // Instead of fetching orders from the database, you can return sample data
    const orders = [
      {
        orderId: '1',
        deliveryDriver: 'John Doe',
        customerName: 'Customer 1',
        customerAddress: 'Address 1',
        totalAmount: '50',
        deliveryCharge: '5',
        tip: '10',
        store: 'Store 1',
      },
      {
        orderId: '2',
        deliveryDriver: 'Jane Doe',
        customerName: 'Customer 2',
        customerAddress: 'Address 2',
        totalAmount: '75',
        deliveryCharge: '8',
        tip: '15',
        store: 'Store 2',
      },
    ];

    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
