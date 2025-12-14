export default function StoreInfoBar({ mcode }) {
  if (!mcode) return null;

  return (
    <div
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid #eee",
        fontWeight: 600
      }}
    >
      매장 코드: {mcode}
    </div>
  );
}