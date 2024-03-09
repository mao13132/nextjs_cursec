import { AdvantagesProps } from "./Advantages.props";
import styles from './Advantages.module.css';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(item => (
                <div key={item._id} className={styles['advantage']}>
                    
                    <div>X</div>

                    <div className={styles['title']}>{item.title}</div>

                    <hr className={styles['vline']} />

                    <div>{item.description}</div>
                </div>
            ))}
        </>
    );
};