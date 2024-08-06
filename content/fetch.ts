export const contentGraphQLFetcher = async <T>({
  query,
  variables = {},
  preview = false,
}: {
  query: string;
  variables?: any;
  preview?: boolean;
}): Promise<T | undefined> => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: preview
          ? `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
          : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  const { data, errors } = await res.json();

  if (errors) {
    console.log(errors);
    throw new Error("content error");
  }

  return data as T;
};
