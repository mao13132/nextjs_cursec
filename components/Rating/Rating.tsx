import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from "react";

export const Rating = ({ isEditable = false, rating, setRating, children, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((rating_: JSX.Element, idx: number) => {
            return (
                <span key={idx}
                    className={cn(styles['star'],
                        {
                            [styles['filled']]: idx < currentRating,
                            [styles['editable']]: isEditable,
                        }
                    )}

                    onMouseEnter={() => changeDisplay(idx + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onclick(idx + 1)}>
                    <img className={styles['icon_star']} src="/star.svg"
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(event: KeyboardEvent) => isEditable && handleSpace(idx + 1, event)}
                    />
                </span>
            );
        });

        setRatingArray(updateArray);
    };

    const changeDisplay = (new_rating: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(new_rating);
    };

    const onclick = (new_rating: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(new_rating);
    };

    const handleSpace = (new_rating: number, event: KeyboardEvent) => {
        if (event.code != 'Space' || !setRating) {
            return;
        }
        setRating(new_rating);
    }

    return (<div {...props}>
        {ratingArray.map((rating_, idx) => (
            <span key={idx}>{rating_}</span>
        ))}
    </div>);
};
