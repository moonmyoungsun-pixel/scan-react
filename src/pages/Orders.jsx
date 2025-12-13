import React, { useEffect, useState } from "react";

export default function Orders() {
  const mcode = localStorage.getItem("mcode");
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
        if (json.success) {
          setOrders(json.data);
        }
      })
      .finally(() => setLoading(false));
  }, [mcode]);

  if (loading) {
    return <div>주문 불러오는 중...</div>;
  }

  return (
    <div>
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
              <tr key={o.id}>
                <td>ORD-{o.id}</td>
                <td>{o.customer_name || "-"}</td>
                <td>{Number(o.total_price).toLocaleString()}원</td>
                <td>{o.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}