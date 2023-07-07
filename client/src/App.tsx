import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
	const router = createBrowserRouter([
		{ path: '/', Component: LoginForm }, // 🆕
		{ path: '/register', Component: RegisterForm },
	]);

	return <RouterProvider router={router} />;
}

export default App;
