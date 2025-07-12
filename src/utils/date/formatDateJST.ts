export function formatDateJST(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}