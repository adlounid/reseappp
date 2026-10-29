export function Pagination({ page, totalPages, onPageChange }: { page: number; totalPages: number; onPageChange: (page: number) => void }) {
  return <div className="pagination">
    <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>← Föregående</button>
    <span aria-live="polite">Sida {page} av {totalPages}</span>
    <button disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>Nästa →</button>
  </div>;
}
