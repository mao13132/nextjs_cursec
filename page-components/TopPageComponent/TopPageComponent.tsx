import { Advantages, Card, HhData, Htag, P, Product, Sort, Tag } from "@/components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { SortEnum } from "@/components/Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "@/reducer/sort.reducer";
import Head from "next/head";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {

    const [{ products: sortedProducts, sort: reducSort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating })

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort })
    };

    return (
        <div className={styles['wrapper']}>

            <div className={styles['title']}>

                <Htag tag='h1'>{page && page.title}</Htag>

                {products && <Tag color="grey" size="m">Длина: {products.length}</Tag>}

                <Sort sort={reducSort} setSort={setSort} />

            </div>

            <div>
                {sortedProducts && sortedProducts.map(items => (
                    <Product key={items._id} product={items} />

                ))}
            </div>

            <div className={styles['hhTitle']}>
                <Htag tag="h2">Вакансии - {page && page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>

            {page && page.hh && <HhData {...page.hh} />}

            {/* Преимущества */}

            {page && page.advantages && page.advantages.length > 0 && <>

                <Htag tag='h2'>Преимущества</Htag>

                <Advantages advantages={page.advantages} />

            </>}

            {page && page.seoText && <div className={styles['seo']} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

            <Htag tag="h2">Получаемые навыки</Htag>

            {page && page.tags.map(tag => <Tag color="primary" key={tag}>{tag}</Tag>)}

        </div>
    );
};
