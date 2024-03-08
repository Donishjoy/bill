import React, { useState, useEffect } from 'react';
import  axios from 'axios';

const Invoice = () => {
  const [orderId, setOrderId] = useState('');
  const [deliveryDriver, setDeliveryDriver] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [deliveryCharge, setDeliveryCharge] = useState('');
  const [tip, setTip] = useState('');
  const [store, setStore] = useState('');
  const [orders, setOrders] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [commission, setCommission] = useState(0);
  const [driverPayment, setDriverPayment] = useState(0);

  const calculateInvoice = () => {
    const commissionAmount = (parseFloat(deliveryCharge) * 0.2).toFixed(2);
    setCommission(commissionAmount);

    const remainingCharge = parseFloat(deliveryCharge) - parseFloat(commissionAmount);
    const driverPaymentAmount = remainingCharge + parseFloat(tip);
    setDriverPayment(driverPaymentAmount.toFixed(2));

    setShowSummary(true);
  };

  const handleSubmit = async (e) => {
     e.preventDefault()
    calculateInvoice();
    try {
        const listProductRequestData = JSON.stringify({
            orderId : orderId,
            deliveryDriver: deliveryDriver,
            customerName:customerName,
            customerAddress: customerAddress,
            totalAmount:totalAmount,
            deliveryCharge:deliveryCharge,
            tip:  tip,
            store: store,
        });
        console.log(listProductRequestData)
    const test = await axios.get('http://localhost:5000/api/test')
    console.log(test)
    const listProductResponse = await axios.post(
        'http://localhost:5000/api/invoice',
        listProductRequestData,
        {
          headers: { 
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("hii.......")
      if (listProductResponse.status === 201) {
        console.log('Form submitted successfully');
        // // Fetch orders after submitting the form
        // fetchOrders();
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error
    }
  };

  const handleCloseSummary = () => {
    setShowSummary(false);
  };

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/orders');
//       setOrders(response.data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch orders on component mount
//     fetchOrders();
//   }, []);

  return (
    <div>
      <h1>Invoice Generation</h1>
      <form >
  <div>
    <label htmlFor="orderId">Order ID:</label>
    <input type="text" id="orderId" name="orderId" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
  </div>
  <div>
    <label htmlFor="deliveryDriver">Delivery Driver:</label>
    <input type="text" id="deliveryDriver" name="deliveryDriver" value={deliveryDriver} onChange={(e) => setDeliveryDriver(e.target.value)} />
  </div>
  <div>
    <label htmlFor="customerName">Customer Name:</label>
    <input type="text" id="customerName" name="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
  </div>
  <div>
    <label htmlFor="customerAddress">Customer Address:</label>
    <input type="text" id="customerAddress" name="customerAddress" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
  </div>
  <div>
    <label htmlFor="totalAmount">Total Amount:</label>
    <input type="text" id="totalAmount" name="totalAmount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
  </div>
  <div>
    <label htmlFor="deliveryCharge">Delivery Charge:</label>
    <input type="text" id="deliveryCharge" name="deliveryCharge" value={deliveryCharge} onChange={(e) => setDeliveryCharge(e.target.value)} />
  </div>
  <div>
    <label htmlFor="tip">Tip:</label>
    <input type="text" id="tip" name="tip" value={tip} onChange={(e) => setTip(e.target.value)} />
  </div>
  <div>
    <label htmlFor="store">Store:</label>
    <input type="text" id="store" name="store" value={store} onChange={(e) => setStore(e.target.value)} />
  </div>
  <button type="submit" onClick={handleSubmit}>Generate Invoice</button>
</form>


      <div>
        <h2>Orders</h2>
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              Order ID: {order.orderId}, Delivery Driver: {order.driver.driverName}, Store: {order.store.storeName}
            </li>
          ))}
        </ul>
      </div>

      {showSummary && (
        <div className="summary-modal">
          <div className="summary-card">
            <h2>Invoice Summary</h2>
            <p>Commission: ${commission}</p>
            <p>Driver Payment: ${driverPayment}</p>
            <button onClick={handleCloseSummary}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoice;
