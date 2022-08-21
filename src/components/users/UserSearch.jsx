import { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
	const { users, clearUsers, searchUsers } = useContext(GithubContext);
	const { setAlert } = useContext(AlertContext);
	const [text, setText] = useState("");
	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.length === 0) {
			setAlert("please enter something", "error");
		} else {
			// do fetch search user
			searchUsers(text);
			setText("");
		}
	};
	// useEffect(() => {
	// 	searchUsers(text);
	// }, []);
	console.log(users);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
			<div>
				<form action="" onSubmit={handleSubmit}>
					<div className="form-control">
						<div className="relative">
							<input
								type="text"
								className="w-full pr-40 bg-gray-200 input input-lg text-black"
								placeholder="Heloo"
								value={text}
								onChange={handleChange}
							/>
							<button
								type="submit"
								className="btn btn-lg absolute top-0 right-0 rounded-l-none w-36"
							>
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button className="btn btn-ghost btn-lg" onClick={clearUsers}>
						Clear Users
					</button>
				</div>
			)}
		</div>
	);
};

export default UserSearch;
