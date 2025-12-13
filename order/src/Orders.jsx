const nextStatus = (status) => {
  if (status === 'received') return 'preparing';
  if (status === 'preparing') return 'completed';
  return 'received';
};

const statusStyle = (status) => {
  switch (status) {
    case 'received':
      return { color: '#dc2626', label: '접수' };
    case 'preparing':
      return { color: '#f59e0b', label: '준비중' };
    case 'completed':
      return { color: '#16a34a', label: '완료' };
    default:
      return { color: '#6b7280', label: '알 수 없음' };
  }
};


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
