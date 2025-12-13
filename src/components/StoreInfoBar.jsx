useEffect(() => {
  if (!mcode) {
    setLoading(false);
    return;
  }

  const controller = new AbortController();

  const loadStore = async () => {
    try {
      const res = await fetch(
        `/scan-fnb/api/store.php?mcode=${mcode}`,
        { signal: controller.signal }
      );
      const json = await res.json();

      if (json?.success) {
        setStore(json.data);
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('store fetch error', err);
      }
    } finally {
      setLoading(false);
    }
  };

  loadStore();

  return () => controller.abort();
}, [mcode]);