import { ButtonProps } from "./Button.props"
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appearance, children, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {

    return (<button
        className={cn(styles['button'], className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })} {...props}>
        {children}
        {arrow != 'none' && <span className={cn(styles['arrow'], {
            [styles['down']]: arrow === 'down',
            [styles['right']]: arrow === 'right',
        })}>
            <img className={styles['icon']} src="/arrow.svg" alt="стрелка состояния кнопки" /></span>}
    </button>);
};