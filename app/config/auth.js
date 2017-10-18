//Private var info configurations

module.exports = {
  'githubAuth': {
    'clientID': process.env.GITHUB_KEY,
    'clientSecret': process.env.GITHUB_SECRET,
    'callbackURL': process.env.APP_URI + 'auth/github/callback'
  }
};