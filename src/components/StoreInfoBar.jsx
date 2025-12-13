useEffect(() => {
  if (!mcode) {
    setLoading(false);   // ✅ 로딩 종료
    return;
  }

  fetch(`https://scankorea.kr/scan-fnb/api/store.php?mcode=${mcode}`)
    .then(res => res.json())
    .then(json => {
      if (json.success) {
        setStore(json.data);
      }
    })
    .finally(() => setLoading(false));
}, [mcode]);