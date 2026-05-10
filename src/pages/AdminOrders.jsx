/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../api";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await axios.get(`${API}/orders`);
    setOrders(res.data);
  };

  const updateStatus = async (id, status) => {
    await axios.patch(`${API}/orders/${id}/status`, { status });
    fetchOrders();
  };

  return (
    <div className="text-white p-10">
      <h1>Admin Dashboard</h1>

      {orders.map((order) => (
        <div key={order._id} className="border p-3 my-3">
          <h2>{order.customerName}</h2>
          <p>Total: {order.totalPrice}</p>

          <button onClick={() => updateStatus(order._id, "served")}>
            Mark Served
          </button>
        </div>
      ))}
    </div>
  );
}
