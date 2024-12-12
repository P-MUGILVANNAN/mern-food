import { useEffect, useState } from 'react';
import axios from 'axios';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from backend
  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/order/list', {
        headers: {
          Authorization: `Bearer ${yourToken}`, // Replace `yourToken` with the token from your context or state
        },
      });
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        setError('Failed to fetch orders');
      }
    } catch (err) {
      setError('Error fetching orders');
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="orders">
      <h2>Orders</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="order-item">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Amount:</strong> ${order.amount}</p>
              <p><strong>Address:</strong> {order.address.street}, {order.address.city}, {order.address.state}, {order.address.pincode}, {order.address.country}</p>
              <p><strong>Phone:</strong> {order.address.phone}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {order.item.map((item) => (
                  <li key={item._id}>
                    {item.name} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
              <p><strong>Status:</strong> {order.status || 'Pending'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders available</p>
      )}
    </div>
  );
};

export default Orders;
