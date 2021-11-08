const API_URL: string =
	process.env.WORDPRESS_API_URL || "http://localhost:8000/index.php?graphql";

export async function fetchAPI(query: string, { variables }: any = {}) {
	const headers: any = { 
		"Content-Type": "application/json",
		"host": "healthykitchen101.com" 
	};

	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers[
			"Authorization"
		] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
	}
	
	const res = await fetch(API_URL, {
		method: "POST",
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	});
	const json = await res.json();
	if (json.errors) {
		console.log(query);
		console.log(variables);
		console.error(json.errors);
		throw new Error("Failed to fetch API");
	}
	return json.data;
}