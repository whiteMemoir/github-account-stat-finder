import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/layouts/Loading";
import GithubContext from "../context/github/GithubContext";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import RepoList from "../components/repos/RepoList";

const User = () => {
	const { loginName } = useParams();
	const { user, loading, dataUser, getUserRepos, repos } =
		useContext(GithubContext);

	useEffect(() => {
		dataUser(loginName);
		getUserRepos(loginName);
	}, []);

	const {
		login,
		id,
		node_id,
		avatar_url,
		gravatar_id,
		url,
		html_url,
		followers_url,
		following_url,
		gists_url,
		starred_url,
		subscriptions_url,
		organizations_url,
		repos_url,
		events_url,
		received_events_url,
		type,
		site_admin,
		name,
		company,
		blog,
		location,
		email,
		hireable,
		bio,
		twitter_username,
		public_repos,
		public_gists,
		followers,
		following,
		created_at,
		updated_at,
	} = user;

	if (loading) {
		return <Loading />;
	} else {
		return (
			// <div className="card w-full my-7 rounded-lg shadow">
			// 	<h1 className="card-title font-medium text-lg p-6">{user.login}</h1>
			// 	<div className="card-body">
			// 		<img className="rounded-full w-24" src={user.avatar_url} alt="" />
			// 	</div>
			// </div>
			<>
				<div className="w-full mx-auto lg:w-11/12">
					<div className="mb-4">
						<Link to="/" className="btn btn-ghost">
							Back to Search
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8">
						<div className="custom-card-image mb-6 md:mb-0">
							<div className="rounded-lg shadow-xl card image-full">
								<figure>
									<img src={avatar_url} alt="" />
								</figure>
								<div className="card-body justify-end">
									<h2 className="card-title mb-0">{name}</h2>
									<p className="flex-grow-0">{login}</p>
								</div>
							</div>
						</div>

						<div className="col-span-2">
							<div className="mb-6">
								<h1 className="text-3xl card-title">{name}</h1>
								<div className="ml-2 mr-1 badge badge-success">{type}</div>
								{hireable && (
									<div className="mx-1 badge badge-info">Hireable</div>
								)}
								<p>{bio}</p>
								<div className="mt-4 card-actions">
									<a
										target="_blank"
										rel="noref"
										href={html_url}
										className="btn btn-outline"
									>
										Visit Github Profile
									</a>
								</div>
							</div>

							<div className="w-full rounded-lg shadow-md bg-base-100 stats">
								{location && (
									<div className="stat">
										<div className="stat-title text-base">Location</div>
										<div className="stat-value text-lg">{location}</div>
									</div>
								)}
								{blog && (
									<div className="stat">
										<div className="stat-title text-base">Blog</div>
										<a
											href={`https://${blog}`}
											target="_blank"
											className="stat-value btn-ghost text-lg text-center rounded-lg"
										>
											{blog}
										</a>
									</div>
								)}
								{twitter_username && (
									<div className="stat">
										<div className="stat-title text-base">Twitter</div>
										<a
											href={`https://twitter.com/${twitter_username}`}
											target="_blank"
											className="stat-value btn-ghost text-lg text-center rounded-lg"
										>
											{twitter_username}
										</a>
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="w-full bg-base-100 stats py-5 mb-6 rounded-lg shadow-md">
						<div className="stat">
							<div className="stat-figure text-secondary">
								<FaUsers className="text-3xl md:text-5xl" />
							</div>
							<div className="stat-title pr-5">Followers</div>
							<div className="stat-value pr-5 text-3xl ">{followers}</div>
						</div>
						<div className="stat">
							<div className="stat-figure text-secondary">
								<FaUserFriends className="text-3xl md:text-5xl" />
							</div>
							<div className="stat-title pr-5">Following</div>
							<div className="stat-value pr-5 text-3xl ">{following}</div>
						</div>
						<div className="stat">
							<div className="stat-figure text-secondary">
								<FaCodepen className="text-3xl md:text-5xl" />
							</div>
							<div className="stat-title pr-5">Public Repos</div>
							<div className="stat-value pr-5 text-3xl ">{public_repos}</div>
						</div>
						<div className="stat">
							<div className="stat-figure text-secondary">
								<FaStore className="text-3xl md:text-5xl" />
							</div>
							<div className="stat-title pr-5">Public Gists</div>
							<div className="stat-value pr-5 text-3xl ">{public_gists}</div>
						</div>
					</div>
				</div>
				<RepoList repos={repos} />
			</>
		);
	}
};

export default User;
