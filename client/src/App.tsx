import { JSXElementConstructor, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Protected from './components/Protected';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { protectedGet } from './apis';

function App() {
	const router = createBrowserRouter([
		{ path: '/', Component: LoginForm }, // 🆕
		{ path: '*', Component: Root },
	]);

	return <RouterProvider router={router} />;
}

function Root() {
	//TODO: auth state was always false....couldnt fix in time
	// const [isAuthenticated, setIsAuthenticated] = useState(false);

	// useEffect(() => {
	// 	console.log('useEff Runnin');
	// 	async function checkAuthentication() {
	// 		try {
	// 			const isAuthenticated = await authCheck();
	// 			setIsAuthenticated(isAuthenticated);
	// 		} catch (error) {
	// 			setIsAuthenticated(false);
	// 		}
	// 	}

	// 	checkAuthentication();
	// }, [authCheck]);
	return (
		<Routes>
			<Route path='/register' element={<RegisterForm />} />
			<Route path='/login' element={<LoginForm />} />
			<Route path='/weee' element={<Protected children={<RegisterForm />} />} />
		</Routes>
	);
}

async function authCheck() {
	const res = await protectedGet({ url: 'auth/checkToken' });
	const data = await res.text();
	console.log(data);

	return data === 'Token is valid';
}
export default App;
