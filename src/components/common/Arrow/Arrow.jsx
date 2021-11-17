import styles from './Arrow.module.css'
import arrow from '../../../assets/images/arrow.png';

let Arrow = (props) => {
	return <span>
		<img className={styles.arrow} src={arrow} />
	</span>
}
export default Arrow;