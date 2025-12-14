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
        // ✅ API 응답 단순화 (배열 기준)
        setOrders(Array.isArray(json) ? json : []);
      })
      .catch(err => {
        console.error("orders fetch error", err);
      })
      .finally(() => setLoading(false));
  }, [mcode]);

  if (loading) {
    return <div className="orders-loading">주문 불러오는 중…</div>;
  }

  return (
    <div className="orders-wrap">
      <h2 className="orders-title">주문 내역</h2>

      {orders.length === 0 ? (
        <p className="orders-empty">주문 내역이 없습니다.</p>
      ) : (
        <table className="orders-table">
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
                <td className="mono">ORD-{o.order_id}</td>
                <td>{o.customer_name || "-"}</td>
                <td className="price">
                  {Number(o.total).toLocaleString()}원
                </td>
                <td className="date">{o.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}