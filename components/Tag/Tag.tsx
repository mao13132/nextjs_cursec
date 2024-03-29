import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 's', color = 'ghost', href, children, className, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(styles['tag'], className,
            {
                [styles['s']]: size == 's',
                [styles['m']]: size == 'm',
                [styles['ghost']]: color == 'ghost',
                [styles['red']]: color == 'red',
                [styles['grey']]: color == 'grey',
                [styles['green']]: color == 'green',
                [styles['primary']]: color == 'primary',
            }
        )} {...props}>

            {
                href
                    ? <a>{children}</a>
                    : <>{children}</>
            }


        </div>
    );
};