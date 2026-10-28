export function Loading({ label }: { label: string }) {
  return <div className="status" role="status"><span className="spinner" />{label}</div>;
}

export function ErrorMessage({ error, retry }: { error: Error; retry: () => void }) {
  return <section className="status error" role="alert"><p>{error.message}</p><button onClick={retry}>Försök igen</button></section>;
}
