export const down = async (url: string) => {
    const res = await fetch(url);
    if (res.ok) {
        const file = await res.blob()
        return file
    }
}