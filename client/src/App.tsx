import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Routes,
} from 'react-router-dom';

function App() {
	const router = createBrowserRouter([
		{ path: '/', Component: LoginForm }, // 🆕
		{ path: '*', Component: Root },
	]);

	return <RouterProvider router={router} />;
}

function Root() {
	return (
		<Routes>
			<Route path='/register' element={<RegisterForm />} />
			<Route path='/login' element={<LoginForm />} />
		</Routes>
	);
}
export default App;
