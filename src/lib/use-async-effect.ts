import { DependencyList, useEffect, useState } from "react";

export function useAsyncEffect(fn: () => Promise<void>, deps: DependencyList) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fn()
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, deps);

  return loading;
}
