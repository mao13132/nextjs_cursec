
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.omterface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'service', name: 'Сервисы', id: TopLevelCategory.Services },
    { route: 'courses', name: 'Курсы', id: TopLevelCategory.Courses },
    { route: 'books', name: 'Книги', id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', id: TopLevelCategory.Products },
]

export const priceRu = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const devOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];

    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};
