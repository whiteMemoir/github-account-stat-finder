import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import Loading from "../layouts/Loading";
import PropTypes from "prop-types";

const RepoList = ({ repos }) => {
	// const { loading, repos } = useContext(GithubContext);
	// console.log(repos);
	// if (loading) {
	// 	return <Loading />;
	// } else {
	console.log(repos);
	return (
		<div className="rounded-lg shadow-lg card bg-base-100">
			<div className="card-body">
				<h2 className="text-xl my-4 font-bold card-title">Top Repositories</h2>
				{repos.map((repo) => {
					return <h3>{repo.name}</h3>;
				})}
			</div>
		</div>
	);
	// }
};

RepoList.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
