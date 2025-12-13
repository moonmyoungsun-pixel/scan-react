import { useEffect, useState } from 'react';

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

export default function Orders({ mcode }) {
  const [orders, setOrders] = useState([]);

  const load = async () => {
    const res = await fetch(`/scan-fnb/api/orders.php?mcode=${mcode}`);
    setOrders(await res.json());
  };

  useEffect(() => {
    load();
  }, [mcode]);

  return (
    <div>
      {orders.map(o => {
        const s = statusStyle(o.status);

        return (
          <div
            key={o.order_id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee'
            }}
          >
            <div>
              <strong>#{o.order_id}</strong>
              <div style={{ fontSize: 13, color: '#666' }}>
                {o.total.toLocaleString()}원
              </div>
            </div>

            <div
              style={{ color: s.color, fontWeight: 700, cursor: 'pointer' }}
              onClick={() => {
                setOrders(prev =>
                  prev.map(x =>
                    x.order_id === o.order_id
                      ? { ...x, status: nextStatus(x.status) }
                      : x
                  )
                );
              }}
              title="클릭해서 상태 변경"
            >
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}