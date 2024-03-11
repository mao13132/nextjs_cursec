import { ProductProps } from "./Product.props";
import cn from 'classnames';
import styles from './Product.module.css';
import { Button, Card, Divider, Rating, Tag } from "..";
import { devOfNum, priceRu } from "@/helpers/helpers";
import Image from 'next/image';
import { useState } from "react";

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {

    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(true);

    return (
        <>
            <Card className={styles['product']}>

                <div className={cn(styles['logo'], className)}>
                    <Image src={`/${product.image}`}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                    {/* <img src={`/${product.image}`} alt={product.title} /> */}
                </div>

                <div className={cn(styles['title'], className)}>
                    {product.title}
                </div>

                <div className={cn(styles['price'], className)}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag className={styles['TagOldPrice']} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>

                <div className={cn(styles['credit'], className)}>
                    {priceRu(product.credit)}/<span className={styles['month']}>мес</span>
                </div>

                <div className={cn(styles['rating'], className)}>
                    <Rating rating={product.reviewAvg ?? product.initialRating} />
                </div>

                <div className={cn(styles['tags'], className)}>
                    {product.categories.map(item => <Tag className={styles['category']} key={item} color='ghost'>{item}</Tag>)}
                </div>

                <div className={cn(styles['titlePrice'], className)}>Цена</div>

                <div className={cn(styles['creditTitle'], className)}>Кредит</div>

                <div className={cn(styles['rateTitle'], className)}>{product.reviewCount} {devOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>

                <Divider className={styles['hr']} />

                <div className={cn(styles['description'], className)}>{product.description}</div>

                <div className={cn(styles['feature'], className)}>
                    {product.characteristics.map(item => (
                        <div className={styles['characteristics']} key={item.name}>
                            <span className={styles['characteristicsName']}>{item.name}</span>
                            <span className={styles['characteristicsDots']}></span>
                            <span className={styles['characteristicsValue']}>{item.value}</span>
                        </div>
                    ))}
                </div>

                <div className={cn(styles['advBlock'], className)}>
                    {product.advantages && <div className={styles['advantages']}>
                        <div className={styles['advTitle']}>Преимущества</div>
                        <div >{product.advantages}</div>
                    </div>}

                    <div className={styles['disadvantages']}>
                        <div className={styles['advTitle']}>Недостатки</div>
                        <div>Нет недостатков</div>
                    </div>

                </div>

                <Divider className={cn(styles['hr'], styles['hr2'])} />

                <div className={styles['actions']}>
                    <Button appearance="primary">Узнать подробнее</Button>
                    <Button appearance="ghost" 
                    arrow={isReviewOpened ? 'down' : 'right'} 
                    className={styles['reviewButton']}
                    onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >Читать отзывы</Button>
                </div>



            </Card>

            <Card color="blue" className={cn(styles['reviews'], {
                [styles['opened']]: isReviewOpened,
                [styles['closed']]: !isReviewOpened,
            })}>Отзыв</Card>
            
        </>
    );
};