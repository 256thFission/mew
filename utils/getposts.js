import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://BVU.codes',
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API,
  version: 'v5.0',
});

// eslint-disable-next-line import/prefer-default-export
export async function getPosts() {
  // eslint-disable-next-line no-return-await
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}
