import { useEffect, useState } from 'react';

export default function Orders({ mcode }) {
  const [orders, setOrders] = useState([]);

  const load = async () => {
    const res = await fetch(`/scan-fnb/api/orders.php?mcode=${mcode}`);
    setOrders(await res.json());
  };

  useEffect(() => { load(); }, [mcode]);

  return (
    <div>
      {orders.map(o => (
        <div key={o.order_id}>
          {o.order_id} / {o.total.toLocaleString()}원
        </div>
      ))}
    </div>
  );
}
