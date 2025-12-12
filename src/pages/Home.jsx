import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ marginBottom: "8px" }}>SCAN F&B Dashboard</h2>
      <p style={{ color: "#666" }}>
        매장의 운영을 위한 모든 기능을 한 곳에서 관리하세요.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <FeatureCard
          emoji="🛒"
          title="Orders"
          desc="주문 확인 및 상태 관리"
          link="/orders"
        />
        <FeatureCard
          emoji="🍽️"
          title="Menus"
          desc="메뉴 등록 및 수정"
          link="/menus"
        />
        <FeatureCard
          emoji="🏪"
          title="Merchants"
          desc="매장 정보 관리"
          link="/merchants"
        />
        <FeatureCard
          emoji="📈"
          title="Sales"
          desc="기간별 매출 분석"
          link="/sales"
        />
        <FeatureCard
          emoji="⚙️"
          title="Settings"
          desc="환경 설정"
          link="/settings"
        />
      </div>
    </div>
  );
}

function FeatureCard({ emoji, title, desc, link }) {
  return (
    <a
      href={link}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "18px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          cursor: "pointer",
          transition: "0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-4px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0px)")
        }
      >
        <h3 style={{ marginBottom: "6px" }}>
          {emoji} {title}
        </h3>
        <p style={{ margin: 0, color: "#666" }}>{desc}</p>
      </div>
    </a>
  );
}