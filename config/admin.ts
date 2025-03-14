export default () => ({
  auth: {
    secret: 'I6lql03wDItwvu0VLmlz/w==', // ADMIN_JWT_SECRET
  },
  apiToken: {
    salt: '5I4qQu8rj0vCZtVwSvVH4A==', // API_TOKEN_SALT
  },
  transfer: {
    token: {
      salt: 'tkhGYXZ54tF7KCtnvLDgBg==', // TRANSFER_TOKEN_SALT
    },
  },
  flags: {
    nps: true, // FLAG_NPS
    promoteEE: true, // FLAG_PROMOTE_EE
  },
});
