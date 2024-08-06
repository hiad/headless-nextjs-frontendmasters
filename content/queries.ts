import "server-only";

import { HeaderNavQuery, HeroQuery, LogoWallQuery } from "../types";
import { contentGraphQLFetcher } from "./fetch";

export const getContentHero = async () => {
  const query = `#graphql
    query HeroCollection {
        heroCollection {
            items {
            preTitle
            subTitle
            title
            _id
            callToActionsCollection {
                items{
                link
                title
                }
            }
            }
        }
    }
    `;

  const data = await contentGraphQLFetcher<HeroQuery>({ query });
  if (!data) {
    throw new Error("No data found");
  }

  return data;
};

export const getContentForLogoWall = async () => {
  const query = `#graphql
    query Items($where: AssetFilter) {
        assetCollection(where: $where) {
            items {
            fileName
            url
            width
            height
            }
        }
    }
    `;
  const data = await contentGraphQLFetcher<LogoWallQuery>({
    query,
    variables: {
      where: {
        title_contains: "client",
      },
    },
  });
  if (!data) {
    throw new Error("No data found");
  }

  return data;
};

export const getContentForHeaderNav = async () => {
  const query = `#graphql
       query NavigationCollection($where: NavigationFilter) {
  navigationCollection(where: $where) {
          items {
            name
            linksCollection {
              items {
                title
                link
              }
            }
          }
        }
      }
    `;
  const data = await contentGraphQLFetcher<HeaderNavQuery>({
    query,
    variables: {
      where: {
        name: "Header",
      },
    },
  });
  if (!data) {
    throw new Error("No data found");
  }

  return data;
};
