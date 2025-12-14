export default function StoreInfoBar({ mcode }) {
  return (
    <div style={{ padding: 12, borderBottom: "1px solid #eee" }}>
      {mcode ? (
        <>매장 코드: {mcode}</>
      ) : (
        <span style={{ color: "#999" }}>
          매장이 선택되지 않았습니다
        </span>
      )}
    </div>
  );
}