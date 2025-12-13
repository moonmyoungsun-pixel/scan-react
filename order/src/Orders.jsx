import { useEffect, useState } from 'react';

/* ------------------------------
   상태 순환 규칙
------------------------------ */
const nextStatus = (status) => {
  if (status === 'received') return 'preparing';
  if (status === 'preparing') return 'completed';
  return 'received';
};

/* ------------------------------
   상태별 UI 스타일
------------------------------ */
const statusStyle = (status) => {
  switch (status) {
    case 'received':
      return { color: '#dc2626', label: '접수' };     // 빨강
    case 'preparing':
      return { color: '#f59e0b', label: '준비중' };   // 노랑
    case 'completed':
      return { color: '#16a34a', label: '완료' };     // 초록
    default:
      return { color: '#6b7280', label: '알 수 없음' };
  }
};

export default function Orders({ mcode }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ------------------------------
     주문 목록 로드
  ------------------------------ */
  const load = async () => {
    try {
      const res = await fetch(`/scan-fnb/api/orders.php?mcode=${mcode}`);
      const json = await res.json();
      setOrders(json || []);
    } catch (e) {
      console.error('orders load failed', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!mcode) {
      setLoading(false);
      return;
    }
    load();
  }, [mcode]);

  if (loading) {
    return <div style={{ color: '#999' }}>주문 불러오는 중…</div>;
  }

  if (!orders.length) {
    return <div style={{ color: '#999' }}>주문이 없습니다</div>;
  }

  /* ------------------------------
     렌더링
  ------------------------------ */
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
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid #eee'
            }}
          >
            {/* 주문 정보 */}
            <div>
              <strong>#{o.order_id}</strong>
              <div style={{ fontSize: 13, color: '#666' }}>
                {Number(o.total).toLocaleString()}원
              </div>
            </div>

            {/* 상태 표시 + 클릭 */}
            <div
              style={{
                color: s.color,
                fontWeight: 700,
                cursor: 'pointer',
                userSelect: 'none'
              }}
              title="클릭해서 상태 변경"
              onClick={async () => {
                const newStatus = nextStatus(o.status);

                // 1️⃣ UI 즉시 반영 (손맛)
                setOrders(prev =>
                  prev.map(x =>
                    x.order_id === o.order_id
                      ? { ...x, status: newStatus }
                      : x
                  )
                );

                // 2️⃣ 서버 저장
                try {
                  await fetch('/scan-fnb/api/order-status.php', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                      order_id: o.order_id,
                      status: newStatus
                    })
                  });
                } catch (e) {
                  console.error('order status save failed', e);
                }
              }}
            >
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
