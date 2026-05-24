import { ENV } from "../config/env";
import { graphqlFetch } from "../utils/data-fetcher";

export async function getCountries() {
  const query = `
    {
      countries {
        code
        name
        capital
        emoji
      }
    }
  `;
  return graphqlFetch(ENV.COUNTRIES_API, query);
}
