export function PageButtons({ sorted, page, totalPages, setPage }) {
    return (
        <div className='flex items-center justify-between p-3 text-sm'>
            <div>Total <b>{sorted.length}</b> records, page <b>{page}</b>/<b>{totalPages}</b></div>
            <div className='flex items-center gap-2'>
                <button disabled={page <= 1} onClick={() => setPage(1)} className='rounded-lg border px-2 py-1 disabled:opacity-40'>⏮</button>
                <button disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p - 1))} className='rounded-lg border px-2 py-1 disabled:opacity-40'>Previous</button>
                <button disabled={page >= totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))} className='rounded-lg border px-2 py-1 disabled:opacity-40'>Next</button>
                <button disabled={page >= totalPages} onClick={() => setPage(totalPages)} className='rounded-lg border px-2 py-1 disabled:opacity-40'>⏭</button>
            </div>
        </div>
    );
}