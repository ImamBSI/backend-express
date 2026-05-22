import { ENV } from "../config/env";
import { graphqlFetch } from "../utils/data-fetcher";

export async function getCharacters() {
  const query = `
    query {
      characters(page: 1) {
        results {
          id
          name
          status
          species
          image
        }
      }
    }
  `;

  return graphqlFetch(ENV.RICK_AND_MORTY_API, query);
}