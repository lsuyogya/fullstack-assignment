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
	const [loginCreds, setLoginCreds] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	});

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLoginCreds({ ...loginCreds, [e.target.id]: e.target.value });
	}

	function handleRegister(e: React.FormEvent<HTMLFormElement>) {}

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
				<Heading color='tomato'>Register</Heading>
				<Box minW={{ base: '90%', md: '468px' }}>
					<form onSubmit={handleRegister}>
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
							<FormControl>
								<InputGroup>
									<Input
										type='password'
										placeholder='Password'
										id='confirmPassword'
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
								Register
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				Already have an account?{' '}
				<RouterLink to='/'>
					<Link color='red.500' href='#'>
						Sign In
					</Link>
				</RouterLink>
			</Box>
		</Flex>
	);
};

export default loginForm;
