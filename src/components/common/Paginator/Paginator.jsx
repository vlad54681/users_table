import { useState } from 'react';
import styles from './Paginator.module.css'



let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 3 }) => {

	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return <div className={styles.paginator}>
		{
			<button disabled={portionNumber <= 1} onClick={() => { setPortionNumber(portionNumber - 1) }}>Previous</button>}

		{pages
			.filter(pageNumber => pageNumber >= leftPortionPageNumber && pageNumber <= rightPortionPageNumber)
			.map(pageNumber => {
				return <span key={pageNumber} className={currentPage === pageNumber && styles.selectedPage}
					onClick={(e) => { onPageChanged(pageNumber); }}>{pageNumber}</span>
			})}
		{
			<button disabled={portionNumber >= portionCount} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
	</div>
}

export default Paginator;
