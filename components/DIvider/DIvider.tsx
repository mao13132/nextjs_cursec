import { DividerProps } from "./DIvider.props";
import styles from './DIvider.module.css';
import cn from 'classnames';

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
    return (<hr className={cn(styles['hr'], className)} {...props} />);
};