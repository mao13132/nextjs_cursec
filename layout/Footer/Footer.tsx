import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (<footer className={cn(className, styles['footer'])} {...props}>
        <div>
            Dreams Teams © 2020 - {format(new Date(), 'yyyy')} Все права защищены
        </div>
        <a href="#" target="blank">Пользовательское соглашение</a>
        <a href="#" target="blank">Политика конфиденциальности</a>
    </footer>)
};