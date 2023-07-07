import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Protected = (props: any) => {
	const nav = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('jwt')) {
			nav('/login');
		}
	}, []);

	return <div>{props.children}</div>;
};
export default Protected;
