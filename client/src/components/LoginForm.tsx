import {
	Flex,
	Heading,
	Input,
	Button,
	InputGroup,
	Stack,
	Box,
	Link,
	FormControl,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const loginForm = () => {
	const [loginCreds, setLoginCreds] = useState({ username: '', password: '' });

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLoginCreds({ ...loginCreds, [e.target.id]: e.target.value });
	}

	async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const res = await fetch('http://localhost:3000/auth/login', {
			method: 'POST',
			body: JSON.stringify(loginCreds),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}).catch(() => {
			alert('Login Failed');
		});
		//@ts-ignore//;
		const data = await res.json();
		localStorage.setItem('jwt', data.access_token);
	}

	return (
		<Flex
			flexDirection='column'
			width='100vw'
			height='100vh'
			justifyContent='center'
			alignItems='center'>
			<Stack
				flexDir='column'
				mb='2'
				justifyContent='center'
				alignItems='center'>
				<Heading color='tomato'>Login</Heading>
				<Box minW={{ base: '90%', md: '468px' }}>
					<form onSubmit={handleLogin}>
						<Stack spacing={4} p='1rem' boxShadow='md'>
							<FormControl>
								<InputGroup>
									<Input
										type='text'
										placeholder='Username'
										id='username'
										onChange={handleInputChange}
									/>
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<Input
										type='password'
										placeholder='Password'
										id='password'
										onChange={handleInputChange}
									/>
								</InputGroup>
							</FormControl>
							<Button
								borderRadius={10}
								type='submit'
								variant='solid'
								colorScheme='red'
								width='full'>
								Login
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				Don't have an account?{' '}
				<Link color='red.500' href='/register'>
					Sign Up
				</Link>
			</Box>
		</Flex>
	);
};

export default loginForm;
