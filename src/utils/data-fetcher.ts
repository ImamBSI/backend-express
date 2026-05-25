// Untuk GraphQL
export async function graphqlFetch(
  url: string,
  query: string,
  variables = {}
) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("GraphQL Fetch Error:", error);
    throw error;
  }
}

// Untuk REST API
export async function restFetch(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("REST Fetch Error:", error);
    throw error;
  }
}
