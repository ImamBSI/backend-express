import { ENV } from "../config/env";
import { graphqlFetch } from "../utils/data-fetcher";

export async function getLocations() {
  const query = `
    {
      locations{
        results{
          id
          name
          dimension
        }
      }
    }
  `;
  return graphqlFetch(ENV.RICK_AND_MORTY_API, query);
}