import { TextAriaProps } from "./TextAria.props";
import styles from './TextAria.module.css';
import cn from 'classnames';

export const TextAria = ({ className, ...props }: TextAriaProps): JSX.Element => {
    return (<textarea className={cn(styles['textarea'], className)} {...props} />);
};
