export async function graphqlFetch(
  url: string,
  query: string,
  variables = {}
) {
  try {
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query,
        variables,
      }),
    });

    // Optional validation
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("GraphQL Fetch Error:", error);

    throw error;
  }
}