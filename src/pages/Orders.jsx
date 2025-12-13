useEffect(() => {
  if (!mcode) {
    setLoading(false);   // ✅ 핵심
    return;
  }

  fetch(`https://scankorea.kr/scan-fnb/api/orders.php?mcode=${mcode}`)
    .then(res => res.json())
    .then(json => {
      if (json.success) {
        setOrders(json.data);
      }
    })
    .finally(() => setLoading(false));
}, [mcode]);
