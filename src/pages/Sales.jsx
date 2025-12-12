import { useState } from "react";
import "./Sales.css";

export default function Sales() {
  const [period, setPeriod] = useState("daily");

  return (
    <div className="sales-page">
      <h1 className="sales-title">📊 Sales Dashboard</h1>

      {/* 상단 기간 선택 메뉴 (탭) */}
      <div className="sales-tabs">
        <button
          className={period === "daily" ? "active" : ""}
          onClick={() => setPeriod("daily")}
        >
          Daily
        </button>

        <button
          className={period === "weekly" ? "active" : ""}
          onClick={() => setPeriod("weekly")}
        >
          Weekly
        </button>

        <button
          className={period === "monthly" ? "active" : ""}
          onClick={() => setPeriod("monthly")}
        >
          Monthly
        </button>

        <button
          className={period === "quarterly" ? "active" : ""}
          onClick={() => setPeriod("quarterly")}
        >
          Quarterly
        </button>

        <button
          className={period === "yearly" ? "active" : ""}
          onClick={() => setPeriod("yearly")}
        >
          Yearly
        </button>
      </div>

      {/* 선택 영역 - 여기에 나중에 그래프/표 연결 */}
      <div className="sales-content">
        <h3>선택된 기간: {period.toUpperCase()}</h3>
        <p>여기에 {period} 데이터가 표시됩니다.</p>
      </div>
    </div>
  );
}
