import { TextAriaProps } from "./TextAria.props";
import styles from './TextAria.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const TextAria = forwardRef(({ className, error, ...props }: TextAriaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles['textareaWrapper'], className)}>

            <textarea className={cn(styles['textarea'], {
                [styles['error']]: error
            })} {...props} ref={ref} />

            {error && <span className={styles['errorMessage']}>{error.message}</span>}

        </div>
    );
});
