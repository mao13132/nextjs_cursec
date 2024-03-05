interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}
interface MenuItem {
    _id: {
        secondCategory: string
    };
    pages: PageItem[];
}
