<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

require_once $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';
global $wpdb;

$id = $_GET['id'] ?? '';

if (!$id) {
  echo json_encode([
    'success' => false,
    'message' => 'order id missing'
  ]);
  exit;
}

$table = $wpdb->prefix . 'fnb_orders';

$order = $wpdb->get_row(
  $wpdb->prepare(
    "SELECT
      id,
      customer_name,
      customer_phone,
      customer_address,
      customer_request,
      voice_text,
      total_price,
      created_at
     FROM $table
     WHERE id = %d",
    $id
  ),
  ARRAY_A
);

echo json_encode([
  'success' => true,
  'data' => $order
]);