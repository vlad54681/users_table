import React from "react";
import Paginator from "../common/Paginator/Paginator";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import styles from './Users.module.css';
import TableSearch from '../common/TableSearch/TableSearch'
import Table from "../Table/Table";



let Users = ({ searchOnStateHandler, searchOnState, search, searchHandler, onSort, totalUsersCount, pageSize, currentPage, onPageChanged, onRowSelect, users, profileInfo, ...props }) => {

	return <div className={styles.wrapper}>
		<div className={styles.searchModule}>
			<TableSearch
				users={users}
				onSearch={searchHandler}
				searchOnStateHandler={searchOnStateHandler} />
		</div>
		<Table onSort={onSort}
			onRowSelect={onRowSelect}
			users={users}
			currentPage={currentPage}
			pageSize={pageSize} />

		<div >
			<Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
				currentPage={currentPage} onPageChanged={onPageChanged} />
		</div>
		<ProfileInfo profileInfo={profileInfo} />
	</div >
}


export default Users;