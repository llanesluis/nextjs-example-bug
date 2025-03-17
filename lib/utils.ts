export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}