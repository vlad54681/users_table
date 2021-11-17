import { useState } from 'react';
import TableSelectState from '../SelectState/TableSelectState';
import styles from './TableSearch.module.css'

let TableSearch = ({ searchOnStateHandler, onSearch, users }) => {

	const [value, setValue] = useState('')
	const valueChangeHandler = event => {
		setValue(event.target.value)
	}

	return <form className={styles.inputContainer}>

		<span>
			<button className={styles.searchButton} type='button'
				onClick={() => onSearch(value)}
			>SEARCH</button>

			<input type="text"
				value={value}
				onChange={valueChangeHandler} />
		</span>
		<span>
			<TableSelectState
				users={users}
				searchOnStateHandler={searchOnStateHandler}
				onSearch={onSearch} />
		</span>
	</form>
}

export default TableSearch;