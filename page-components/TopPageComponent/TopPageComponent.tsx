import { Card, HhData, Htag, Tag } from "@/components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles['wrapper']}>

            <div className={styles['title']}>

                <Htag tag='h1'>{page.title}</Htag>

                {products && <Tag color="grey" size="m">Длина: {products.length}</Tag>}

                <span>Сортировка</span>

            </div>

            <div>
                {products && products.map(items => (
                    <div key={items._id}>

                        {items.title}

                    </div>
                ))}
            </div>

            <div className={styles['hhTitle']}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>

            {page.hh && <HhData {...page.hh} />}

            {/* Преимущества */}

            {page.advantages && page.advantages.length > 0 && <>
                
                <Htag tag='h2'>Преимущества</Htag>

            </>}

        </div>
    );
};
