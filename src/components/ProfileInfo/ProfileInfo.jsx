import styles from './ProfileInfo.module.css'


let ProfileInfo = ({ profileInfo }) => {
	if (!profileInfo) {
		return null
	}

	return <div className={styles.profileInfo}>
		<ul className={styles.profileItem}>
			<li>Profile info:</li>
			<li>Selected profile: <span>{profileInfo.firstName} {profileInfo.lastName}</span></li>
			<li className={styles.ipsum}>Description: <span >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur veniam natus nam veritatis maiores asperiores nemo. Hic deleniti, sit placeat dicta enim dolores nobis in doloremque similique sequi perspiciatis velit ab accusantium!</span></li>
			<li>Address: <span>{profileInfo.adress.streetAddress}</span></li>
			<li>City: <span>{profileInfo.adress.city}</span></li>
			<li>State: <span>{profileInfo.adress.state}</span></li>
			<li>Index: <span>{profileInfo.adress.zip}</span></li>
		</ul>
	</div>
}

export default ProfileInfo;