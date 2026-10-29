import { useCallback, useEffect, useState } from "react";

export type ApiResult<T> = {
  data: T | undefined;
  error: Error | undefined;
  isPending: boolean;
  refetch: () => Promise<void>;
};

// Hanterar återanvändbar logik för laddning, data, fel och nya API-försök.
export function useApi<T>(key: string, request: () => Promise<T>, enabled: boolean): ApiResult<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [isPending, setIsPending] = useState(enabled);

  const load = useCallback(async (): Promise<void> => {
    if (!enabled) return;
    setIsPending(true);
    setError(undefined);

    try { setData(await request()); }
    catch (reason: unknown) { setError(reason instanceof Error ? reason : new Error("Ett okänt fel uppstod.")); }
    finally { setIsPending(false); }
  }, [enabled, key]);

  useEffect(() => { void load(); }, [load]);
  return { data, error, isPending, refetch: load };
}
