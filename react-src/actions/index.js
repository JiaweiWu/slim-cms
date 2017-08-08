import axios from 'axios';

export const NEW_POST = "NEW_POST";
export const DELETE_POST = "DELETE_POST";
export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";

const ROOT_URL = "http//localhost:3090/api-v1/";
const TEMP_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OTgyNWIwMmRmYTU4MjMyMjgwYTUxNzQiLCJpYXQiOjE1MDE5ODcwNjQ5NDB9.U5-yoyBQnvLNCXYCfxsYxy_hzcgrmqzzINNd5LjGBIc";

export function addNewPost(post) {

	const request = axios.post({
		baseURL: `${ROOT_URL}post`,
		headers: {
			authorization: TEMP_TOKEN
		},
		data: {
			title: post.title,
			description: post.description,
			content: post.content
		}
	})

	return {
		type: NEW_POST,
		payload: request
	}
}

export funtcion signIn(email, password) {
	const request = axios.post({
		baseURL: `${ROOT_URL}users/signin`,
		data: {
			email,
			password
		}
	});

	return {
		type: SIGNIN,
		payload: request
	}
}