export default function StoreInfoBar({ mcode }) {
  if (!mcode) return null;

  return (
    <div style={{ padding: 12, borderBottom: "1px solid #eee" }}>
      매장 코드: {mcode}
    </div>
  );
}