import { ENV } from "../config/env";
import { graphqlFetch } from "../utils/data-fetcher";

export async function getCountries() {
  const query = `
    query {
      countries {
        code
        name
        capital
        emoji
      }
    }
  `;

  const response = await graphqlFetch(
    ENV.COUNTRIES_API,
    query
  );
  console.log(ENV.COUNTRIES_API);

  return response.data.countries;
}