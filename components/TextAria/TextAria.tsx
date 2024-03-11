import { TextAriaProps } from "./TextAria.props";
import styles from './TextAria.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const TextAria = forwardRef(({ className, ...props }: TextAriaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (<textarea className={cn(styles['textarea'], className)} {...props} ref={ref} />);
});
