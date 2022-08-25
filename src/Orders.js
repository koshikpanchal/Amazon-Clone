import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

const Orders = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("user")
        .doc(user?.uid)
        .collection("orders")
        .ordersBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="order__order">
        {orders?.map((order) => {
          <Order order={order} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
