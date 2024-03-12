
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { ReviewFormProps } from './ReviewForm.props';
import { Button, Input, Rating, TextAria } from '..';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {

    /* Получаю функцию регистрации полей для формы, handleSubmit функция сабмита формы formState - функция состояния формы */
    const { register, control: myControl, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

    const myOnSybmit = (data: IReviewForm) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(myOnSybmit)}>
            <div className={cn(styles['reviewForm'], className)} {...props} >

                <Input {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                    placeholder='Имя'
                    error={errors.name}
                />

                <Input {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
                    className={styles['title']}
                    error={errors.title}
                    placeholder='Заголовок отзыва' />

                <div className={styles['rating']}>
                    <span>Оцена:</span>

                    <Controller
                        control={myControl}
                        name='rating'
                        render={({ field }) => (<Rating isEditable rating={field.value} setRating={field.onChange} ref={field.ref} />)}
                    />


                </div>

                <TextAria {...register('description', { required: { value: true, message: 'Заполните описание' } })}
                    placeholder='Текст отзыва'
                    error={errors.description}
                    className={styles['description']} />

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
        </form>
    );
};
