import axios from "axios";

export async function graphqlFetch(
  url: string,
  query: string,
  variables = {}
) {
  try {
    const response = await axios.post(url, {
      query,
      variables,
    });

    return response.data;
  } catch (error) {
    console.error("GraphQL Fetch Error:", error);

    throw error;
  }
}