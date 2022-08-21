import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
	// const { loading, repos } = useContext(GithubContext);
	// console.log(repos);
	// if (loading) {
	// 	return <Loading />;
	// } else {
	return (
		<div className="rounded-lg shadow-lg card bg-base-100">
			<div className="card-body">
				<h2 className="text-xl my-4 font-bold card-title">
					Latest Repositories
				</h2>
				{repos.map((repo, index) => (
					<RepoItem key={index} repo={repo} />
				))}
			</div>
		</div>
	);
	// }
};

RepoList.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
