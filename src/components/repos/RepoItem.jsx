import PropTypes from "prop-types";
import { FaEye, FaInfo, FaStar, FaLink, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
	const {
		name,
		description,
		html_url,
		stargazers_count,
		watchers_count,
		open_issues,
		forks,
	} = repo;

	return (
		<div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
			<div className="card-body">
				<h3 className="mb-2 text-xl font-semibold">
					<a href={html_url}>
						<FaLink className="inline mr-1" /> &nbsp;
						{name}
					</a>
				</h3>
				<div className="mb-3 ">{description}</div>
				<div>
					<div className="mr-2 badge badge-outline badge-info badge-lg">
						<FaEye className="mr-2" /> &nbsp; {watchers_count}
					</div>
					<div className="mr-2 badge badge-outline badge-warning badge-lg">
						<FaStar className="mr-2" /> &nbsp; {stargazers_count}
					</div>
					<div className="mr-2 badge badge-outline badge-success badge-lg">
						<FaUtensils className="mr-2" /> &nbsp; {forks}
					</div>
					<div className="mr-2 badge badge-outline badge-error badge-lg">
						<FaInfo className="mr-2" /> &nbsp; {open_issues}
					</div>
				</div>
			</div>
		</div>
	);
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
