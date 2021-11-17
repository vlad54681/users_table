import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setSearchToState, setPageSize, setFilteredUsers, setSearch, setProfileInfo, setUsers, toggleIsFetching, setCurrentPage, getUsers } from "../../redux/users-reducer";
import { usersAPI } from "../../api/api";


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);

	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response);
			});
	}

	searchHandler = (search) => {
		this.props.setSearch(search);
		if (!this.props.search) {
			return this.props.users
		} else {
			usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
				.then(response => {
					this.props.toggleIsFetching(false);
					this.props.setFilteredUsers((response.filter(item => {
						return item['firstName'].toLowerCase().includes(this.props.search.toLowerCase())
							|| item['lastName'].toLowerCase().includes(this.props.search.toLowerCase())
							|| item['email'].toLowerCase().includes(this.props.search.toLowerCase())
							|| item['phone'].toLowerCase().includes(this.props.search.toLowerCase())
					})), this.props.currentPage, this.props.pageSize)
				});
			this.props.setPageSize(this.props.users.length);
			this.props.setCurrentPage(1);
		}
	}

	searchOnStateHandler = (searchToState) => {

		this.props.setSearchToState(searchToState);
		if (!this.props.searchToState) {
			return this.props.users
		} else {
			usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
				.then(response => {
					this.props.toggleIsFetching(false);
					this.props.setFilteredUsers((response.filter(item => {
						return item['adress.state'].toLowerCase().includes(this.props.searchToState.toLowerCase())

					})), this.props.currentPage, this.props.pageSize)
				});
			this.props.setPageSize(this.props.users.length);
			this.props.setCurrentPage(1);

		}
	}

	onRowSelect = (profileInfo) => {
		this.props.setProfileInfo(profileInfo)
	}

	onSort = (getCellValue, comparer) => {
		getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

		comparer = (idx, asc) => (a, b) => ((v1, v2) =>
			v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
		)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

		document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
			const table = th.closest('table');
			Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
				.sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
				.forEach(tr => table.appendChild(tr));
		})));
	}

	render() {

		return <div>

			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				onRowSelect={this.onRowSelect}
				users={this.props.users}
				profileInfo={this.props.profileInfo}
				onSort={this.onSort}
				searchHandler={this.searchHandler}
				search={this.props.search}
				setFilteredData={this.setFilteredData}
				setSearchToState={this.props.setSearchToState}
				searchOnState={this.props.searchOnState}
				searchOnStateHandler={this.searchOnStateHandler}
			/>
		</div>
	}
}

let mapStateToProps = (state) => {

	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		profileInfo: state.usersPage.profileInfo,
		search: state.usersPage.search,
		searchToState: state.usersPage.searchToState,
	}
}

export default connect(mapStateToProps, { setSearchToState, setPageSize, setFilteredUsers, setSearch, setProfileInfo, setUsers, toggleIsFetching, setCurrentPage, getUsers })(UsersContainer);