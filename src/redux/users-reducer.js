import { usersAPI } from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_SEARCH = 'SET_SEARCH';
const SET_SEARCH_TO_STATE = 'SEARCH_TO_STATE_HANDLER';
const SET_FILTERED_USERS = 'SET_FILTERED_USERS';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';

let initialState = {
	users: [],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	profileInfo: null,
	search: '',
	searchToState: '',
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTERED_USERS: {
			return { ...state, users: action.users }
		}
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}
		case SET_PAGE_SIZE: {
			return { ...state, pageSize: action.pageSize }
		}
		case SET_PROFILE_INFO: {
			return { ...state, profileInfo: action.profileInfo }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case SET_SEARCH: {
			return { ...state, search: action.search }
		}
		case SET_SEARCH_TO_STATE: {
			return { ...state, searchToState: action.searchToState }
		}
		default:
			return state;
	}
}


export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize })
export const setFilteredUsers = (users) => ({ type: SET_FILTERED_USERS, users })
export const setSearch = (search) => ({ type: SET_SEARCH, search })
export const setSearchToState = (searchToState) => ({ type: SET_SEARCH_TO_STATE, searchToState })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setProfileInfo = (profileInfo) => ({ type: SET_PROFILE_INFO, profileInfo })



export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize)
			.then(response => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(response));
				dispatch(setTotalUsersCount(response.length));
			});
	}
}



export default usersReducer;