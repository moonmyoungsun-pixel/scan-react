import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Orders() {
  const [params] = useSearchParams();
  const mcode = params.get("mcode");

  useEffect(() => {
    if (mcode) {
      localStorage.setItem("mcode", mcode);
    }
  }, [mcode]);

  return (
    <div>
      <h1>Orders</h1>
      <p>현재 매장 코드: {mcode || localStorage.getItem("mcode")}</p>
    </div>
  );
}