import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://scankorea.kr/scan-fnb/api/order.php?id=${id}`)
      .then(res => res.json())
      .then(json => {
        if (json.success) setOrder(json.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>주문 불러오는 중...</div>;
  if (!order) return <div>주문 정보를 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => navigate(-1)}>← 목록으로</button>
      <h2 style={{ marginTop: 12 }}>주문 상세</h2>

      <p><b>주문번호:</b> ORD-{order.id}</p>
      <p><b>고객명:</b> {order.customer_name || "-"}</p>
      <p><b>전화:</b> {order.customer_phone || "-"}</p>
      <p><b>주소:</b> {order.customer_address || "-"}</p>
      <p><b>요청사항:</b> {order.customer_request || "-"}</p>
      <p><b>음성 주문:</b> {order.voice_text || "-"}</p>
      <p><b>금액:</b> {Number(order.total_price).toLocaleString()}원</p>
      <p><b>주문시간:</b> {order.created_at}</p>
    </div>
  );
}