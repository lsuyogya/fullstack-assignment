export async function protectedPost({ body, url }: { body: any; url: string }) {
	return await fetch(`http://localhost:3000/${url}`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
	});
}
export async function protectedGet({ url }: { url: string }) {
	return await fetch(`http://localhost:3000/${url}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
	});
}
