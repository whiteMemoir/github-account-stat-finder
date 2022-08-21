import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className="card shadow-md compact card-side bg-base-100">
			<div className="flex-row items-center space-x-4 card-body">
				<div>
					<div className="avatar">
						<div className="rounded-full shadow w-14 h-14">
							<img src={avatar_url} alt="Profile" />
						</div>
					</div>
				</div>
				<div>
					<Link
						to={`/user/${login}`}
						className="text-gray-400 hover:text-gray-200"
					>
						<h2 className="card-title">{login}</h2>
					</Link>
				</div>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
