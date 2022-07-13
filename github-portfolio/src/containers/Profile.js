import React from 'react';
import './Profile.css';
import Link from "../components/Link/Link";
import List from "../components/List/List";

class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {},
			repositories: [],
			loading: true,
			error: ''
		}
	}

	async componentDidMount() {
		try {
			const profile = await fetch('https://api.github.com/users/crazyk1804');
			const profileJSON = await profile.json();

			if(profileJSON) {
				const repositories = await fetch(profileJSON.repos_url)
				const repositoriesJSON = await repositories.json();

				this.setState({
					data: profileJSON,
					repositories: repositoriesJSON,
					loading: false
				});
			}
		} catch(error) {
			this.setState({
				loading: false,
				error: error.message
			});
		}
	}

	render() {
		const { data, loading, repositories, error } = this.state;
		if(loading || error) return (
			<div>{ loading ? 'Loading...' : error }</div>
		);

		// const items = Object.keys(data).map(key => ({ label: key, value: data[key]}));
		const items = [
			{label: 'html_url', value: <Link url={data.html_url} title="Github URL"/>},
			{label: 'repos_url', value: data.repos_url},
			{label: 'name', value: data.name},
			{label: 'company', value: data.company},
			{label: 'location', value: data.location},
			{label: 'email', value: data.email},
			{label: 'bio', value: data.bio},

		];

		const projects = repositories.map(repository => ({
			label: repository.name,
			value: <Link url={repository.html_url} title="Github URL"/>
		}));


		return (
			<div className="profile-container">
				<img className="profile-avatar" src={data.avatar_url} alt="avatar"/>
				<List items={items} title="Profile"/>
				<List items={projects} title="Projects"/>
			</div>
		)
	}
}

export default Profile;
