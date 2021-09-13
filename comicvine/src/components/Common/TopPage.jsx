import styles from '../../styles/TopPage.module.scss';

const TopPage = (props) => {

    const title = props.title;

    return (
        <div className={styles['top-page']}>
            <div>
                <h1 className={styles.title}>
                    {title}
                </h1>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}
 
export default TopPage;