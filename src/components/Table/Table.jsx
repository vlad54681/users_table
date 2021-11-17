import styles from './Table.module.css';

let Table = ({ onSort, onRowSelect, users, currentPage, pageSize, ...props }) => {
	let lastUserIndex = currentPage * pageSize;
	let firstUserIntex = lastUserIndex - pageSize;
	let currentUsers = users.slice(firstUserIntex, lastUserIndex);


	return <table >
		<tr className={styles.userItemContainer + ' ' + styles.userItemTitleContainer}>
			<th onClick={onSort.bind(null, 'id')} className={styles.userItemTitleId + ' ' + styles.userItem}>id  </th>
			<th onClick={onSort.bind(null, 'firstName')} className={styles.userItemTitleFirstName + ' ' + styles.userItem}>First name</th>
			<th onClick={onSort.bind(null, 'lastName')} className={styles.userItemTitleLastName + ' ' + styles.userItem}>Last name</th>
			<th onClick={onSort.bind(null, 'email')} className={styles.userItemTitleEmail + ' ' + styles.userItem}>Email</th>
			<th onClick={onSort.bind(null, 'phone')} className={styles.userItemTitlePhone + ' ' + styles.userItem}>Phone</th>
			<th onClick={onSort.bind(null, 'adress.state')} className={styles.userItemTitleState + ' ' + styles.userItem}>State</th>

		</tr>
		{
			currentUsers.map(u =>
				<tr className={styles.userItemContainer + ' ' + styles.userItemTitleContainerRows} onClick={onRowSelect.bind(null, u)} key={u.id + u.lastName}>
					<td className={styles.userItemTitleId + ' ' + styles.userItem}>{u.id}</td>
					<td className={styles.userItemTitleFirstName + ' ' + styles.userItem}>{u.firstName}</td>
					<td className={styles.userItemTitleLastName + ' ' + styles.userItem}>{u.lastName}</td>
					<td className={styles.userItemTitleEmail + ' ' + styles.userItem}>{u.email}</td>
					<td className={styles.userItemTitlePhone + ' ' + styles.userItem}>{u.phone}</td>
					<td className={styles.userItemTitleState + ' ' + styles.userItem}>{u.adress.state}</td>


				</tr>)
		}

	</table>
}

export default Table;