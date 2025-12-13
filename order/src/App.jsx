import Orders from './Orders';

export default function App({ mcode }) {
  if (!mcode) return null;
  return (
    <div className="order-wrap">
      <Orders mcode={mcode} />
    </div>
  );
}