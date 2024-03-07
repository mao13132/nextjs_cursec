import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.omterface";
import { useContext } from "react";
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from "next/link";

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'service', name: 'Сервисы', id: TopLevelCategory.Services },
    { route: 'courses', name: 'Курсы', id: TopLevelCategory.Courses },
    { route: 'books', name: 'Книги', id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', id: TopLevelCategory.Products },
]

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu_ => (
                    <div key={menu_.route}>
                        <Link href={`/${menu_.route}`}>

                            <div className={cn(styles['firstLevel'], {
                                [styles['firstLevelActive']]: menu_.id == firstCategory,
                            })}>
                                {menu_.name}
                            </div>

                        </Link>

                        {menu_.id == firstCategory && buildSecondLevel(menu_)}
                    </div>
                ))}
            </>
        );
    };
    const buildSecondLevel = (firstMenu: FirstLevelMenuItem) => {
        return (<div className={styles['secondBlock']}>
            {menu.map(menu_ => (
                <div key={menu_._id.secondCategory}>
                    <div className={styles["secondLevel"]}>{menu_._id.secondCategory}</div>

                    <div className={cn(styles['secondLevelBlock'], {
                        [styles['secondLevelBlockOpen']]: menu_.isOpened,
                    })}></div>

                    {buildThirdLevel(menu_.pages, firstMenu.route)}

                </div>
            ))}
        </div>)
    };

    const buildThirdLevel = (page: PageItem[], route: string) => {
        return (
            page.map(page_ => (
                <Link href={`/${route}/${page_.alias}`} className={cn(styles['thirdLevel'], {
                    [styles['thirdLevelActive']]: false,
                })}>

                    {page_.category}

                </Link>
            ))
        );
    };

    return (<div className={styles['menu']}>
        {buildFirstLevel()}
    </div>)
};