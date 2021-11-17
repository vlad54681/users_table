import { useState } from 'react'
import styles from './TableSelectState.module.css'

let TableSelectState = ({ searchOnStateHandler, users }) => {
	const [value, setValue] = useState('')
	const valueChangeHandler = event => {
		setValue(event.target.value)
	}



	let adressStates = users.map(a => a.adress.state)
	let uniqAdressStates = adressStates.filter((item, index) => {
		return index === adressStates.indexOf(item);
	})
	let whatState = uniqAdressStates.map(a => <option value={a} >{a}</option>)

	return <div className={styles.selectContainer}>
		<select
			value={value}
			onChange={() => searchOnStateHandler(valueChangeHandler)}
			name="" id="">
			{whatState}

		</select>
	</div >
}

export default TableSelectState;