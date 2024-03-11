
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { ReviewFormProps } from './ReviewForm.props';
import { Button, Input, Rating, TextAria } from '..';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    return (
        <>
            <div className={cn(styles['reviewForm'], className)} {...props} >

                <Input placeholder='Имя' />

                <Input className={styles['title']} placeholder='Заголовок отзыва' />

                <div className={styles['rating']}>
                    <span>Оцена:</span>
                    <Rating rating={0} />
                </div>

                <TextAria placeholder='Текст отзыва' className={styles['description']} />

                <div className={styles['submit']}>
                    <Button appearance='primary'>Отправить</Button>
                    <span className={styles['info']}>* Перед публикацией отзыв пройдёт предварительную модерацию и проверку</span>
                </div>

            </div>

            <div className={styles['success']}>

                <div className={styles['successTitle']}>
                    Ваш отзыв отправлен
                </div>

                <div>
                    Спасибо, ваш отзы будет опубликован после проверки
                </div>
                <div className={styles['close']}></div>

            </div>
        </>
    );
};
