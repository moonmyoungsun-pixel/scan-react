import "./Orders.css";

import { useEffect, useState } from "react";

export default function Orders({ mcode }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mcode) {
      setLoading(false);
      return;
    }

    fetch(`https://scankorea.kr/scan-fnb/api/orders.php?mcode=${mcode}`)
      .then(res => res.json())
      .then(json => {
        // ✅ API 응답 단순화
        setOrders(Array.isArray(json) ? json : []);
      })
      .catch(err => {
        console.error("orders fetch error", err);
      })
      .finally(() => setLoading(false));
  }, [mcode]);

  if (loading) {
    return <div>주문 불러오는 중…</div>;
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>주문 내역</h2>

      {orders.length === 0 ? (
        <p>주문 내역이 없습니다.</p>
      ) : (
        <table width="100%" cellPadding="8">
          <thead>
            <tr>
              <th>주문번호</th>
              <th>고객명</th>
              <th>금액</th>
              <th>주문일시</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.order_id}>
                <td>ORD-{o.order_id}</td>
                <td>{o.customer_name || "-"}</td>
                <td>{Number(o.total).toLocaleString()}원</td>
                <td>{o.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
