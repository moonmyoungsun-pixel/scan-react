import React, { useEffect, useState } from "react";

export default function StoreInfoBar() {
  const mcode = localStorage.getItem("mcode");
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mcode) return;

    fetch(
      `https://scankorea.kr/scan-fnb/api/store.php?mcode=${mcode}`
    )
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setStore(json.data);
        }
      })
      .finally(() => setLoading(false));
  }, [mcode]);

  if (loading) {
    return (
      <div style={{ padding: "14px 20px", background: "#f8fafc" }}>
        매장 정보 불러오는 중...
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "14px 20px",
        background: "#f8fafc",
        borderBottom: "1px solid #e5e7eb",
        fontSize: "14px",
        color: "#111827",
      }}
    >
      {store ? (
        <>
          <strong>{store.name}</strong>
          <span style={{ marginLeft: 8, color: "#6b7280" }}>
            ({store.code})
          </span>
        </>
      ) : (
        <span style={{ color: "#ef4444" }}>
          매장 정보 없음
        </span>
      )}
    </div>
  );
}
