import { useEffect, useState } from 'react';

type Reponse<T> = { url: string | null; data: T | null; error: Error | null };

export function useFetch<T>(url: string) {
  const [reponse, setReponse] = useState<Reponse<T>>({ url: null, data: null, error: null });

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<T>;
      })
      .then(data => setReponse({ url, data, error: null }))
      .catch(error => {
        if (error.name !== 'AbortError') setReponse({ url, data: null, error });
      });
    return () => controller.abort();
  }, [url]);

  const loading = reponse.url !== url;
  return { data: reponse.data, error: reponse.error, loading };
}
