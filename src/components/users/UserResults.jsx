import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import Loading from "../layouts/Loading";
import UserItem from "./UserItem";

const UserResults = () => {
	const { users, loading } = useContext(GithubContext);
	// useEffect(() => {
	// 	fetchUsers();
	// }, []);

	if (loading) {
		return <Loading />;
	} else {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{users?.map((user, index) => (
					<UserItem key={index} user={user} />
				))}
			</div>
		);
	}
};

export default UserResults;
