
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.omterface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'service', name: 'Сервисы', id: TopLevelCategory.Services },
    { route: 'courses', name: 'Курсы', id: TopLevelCategory.Courses },
    { route: 'books', name: 'Книги', id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', id: TopLevelCategory.Products },
]