// import { NavLink } from 'react-router-dom';
// import ProfileInfo from '../ProfileInfo/ProfileInfo';
// import styles from './Users.module.css';



// let User = ({ currentPage, pageSize, users, onRowSelect }) => {
// 	let lastUserIndex = currentPage * pageSize;
// 	let firstUserIntex = lastUserIndex - pageSize;
// 	let currentUsers = users.slice(firstUserIntex, lastUserIndex);


// 	return <div>
// 		{currentUsers.map(u =>
// 			<tr onClick={onRowSelect.bind(null, u)} key={u.id + u.firstName} className={styles.userItemContainer}>



// 				<td className={styles.userItemTitleId + ' ' + styles.userItem}>{u.id}</td>
// 				<td className={styles.userItemTitleFirstName + ' ' + styles.userItem}>{u.firstName}</td>
// 				<td className={styles.userItemTitleLastName + ' ' + styles.userItem}>{u.lastName}</td>
// 				<td className={styles.userItemTitleEmail + ' ' + styles.userItem}>{u.email}</td>
// 				<td className={styles.userItemTitlePhone + ' ' + styles.userItem}>{u.phone}</td>
// 				<td className={styles.userItemTitleState + ' ' + styles.userItem}>{u.adress.state}</td>


// 			</tr>)
// 		}
// 	</div >
// }

// export default User;