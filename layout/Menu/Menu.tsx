import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { useContext } from "react";
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/helpers";



export const Menu = (): JSX.Element => {
    const router = useRouter();

    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(menu_ => {
            if (menu_._id.secondCategory == secondCategory) {
                menu_.isOpened = !menu_.isOpened;
            }
            return menu_;
        }));
    };

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

            {menu && menu.map(menu_ => {

                /* Проверяю адресную строку, что бы дать isOpen класс */
                if (menu_.pages.map(page_ => page_.alias).includes(router.asPath.split('/')[2])) {
                    menu_.isOpened = true;
                };

                return (
                    <div key={menu_._id.secondCategory}>
                        <div className={styles["secondLevel"]} onClick={() => openSecondLevel(menu_._id.secondCategory)}>{menu_._id.secondCategory}</div>

                        <div className={cn(styles['secondLevelBlock'], {
                            [styles['secondLevelBlockOpen']]: menu_.isOpened,
                        })}>
                            {buildThirdLevel(menu_.pages, firstMenu.route)}

                        </div>

                    </div>
                )
            })}
        </div>)
    };

    const buildThirdLevel = (page: PageItem[], route: string) => {
        return (
            page.map(page_ => (
                <Link href={`/${route}/${page_.alias}`} className={cn(styles['thirdLevel'], {
                    [styles['thirdLevelActive']]: `/${route}/${page_.alias}` == router.asPath,
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