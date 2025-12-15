export const API_BASE =
  process.env.NODE_ENV === "development"
    ? "https://scankorea.kr/scan-fnb/api/"
    : "https://scankorea.kr/scan-fnb/api/";

export const API = {
  orders: API_BASE + "orders.php",
  menus: API_BASE + "menus.php",
  merchant: API_BASE + "merchant.php",
  orderList: API_BASE + "order-list.php"
};