import { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";

const GithubContext = createContext();

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	//Search Users
	const searchUsers = async (text) => {
		setLoading();

		const params = new URLSearchParams({
			q: text,
		});

		const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
			// headers: {
			// 	Authorization: `token ${GITHUB_TOKEN}`,
			// },
		}).then((res) => res.json());

		const { items } = response;
		// setUsers(response);
		// setLoading(false);
		dispatch({
			type: "GET_USERS",
			payload: items,
		});
	};

	//Get a single User data
	const dataUser = async (login) => {
		setLoading();

		const response = await fetch(`${GITHUB_URL}/users/${login}`, {
			// headers: {
			// 	Authorization: `token ${GITHUB_TOKEN}`,
			// },
		}).then((res) => res.json());

		dispatch({
			type: "SET_USER",
			payload: response,
		});
	};

	//Get User repos
	const getUserRepos = async (login) => {
		setLoading();

		const params = new URLSearchParams({
			per_page: 15,
		});

		const response = await fetch(
			`${GITHUB_URL}/users/${login}/repos?${params}`
			// {
			// 	headers: {
			// 		Authorization: `token ${GITHUB_TOKEN}`,
			// 	},
			// }
		).then((res) => res.json());

		dispatch({
			type: "GET_REPOS",
			payload: response,
		});
	};

	//Set Loading "true"
	const setLoading = () => {
		dispatch({
			type: "SET_LOADING",
		});
	};

	//Set Users empty array []
	const clearUsers = () => {
		dispatch({
			type: "CLEAR_USERS",
		});
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				getUserRepos,
				clearUsers,
				dataUser,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
