import { SearchProps } from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import { Button, Input } from "..";
import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const router = useRouter();

    const [search, setSearch] = useState<string>('');

    /* Функция перехода с запросом */
    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: { q: search }
        })
    };

    const pressEnter = (event: KeyboardEvent) => {
        if (event.key == 'Enter') {
            goToSearch();
        }
    };

    return (<div className={cn(styles['search'], className)} {...props}>

        <Input
            className={styles['input']}
            placeholder="Поиск..."
            value={search}
            onChange={event => setSearch(event.target.value)}
            onKeyDown={pressEnter}
             />

        <Button
            appearance="primary"
            className={styles['button']}
            onClick={() => { goToSearch() }}
        >X</Button>

    </div>);
};