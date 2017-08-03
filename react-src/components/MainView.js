import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Posts from './Posts';
import Comments from './Comments';
import Settings from './Settings';
import NewPost from './NewPost';

const MainView = () => {
	return (
		<div>
			<Switch>
				<Redirect exact from="/" to="/dashboard" />
				<Route path="/dashboard" component={Dashboard} />
				<Route exact path="/posts" component={Posts} />
				<Route path="/posts/newpost" component={NewPost} />
				<Route path="/comments" component={Comments} />
				<Route path="/settings" component={Settings} />
				<Redirect to="/error" />
			</Switch>
		</div>
	);
}

export default MainView;