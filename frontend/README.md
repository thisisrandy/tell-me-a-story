# Frontend

## Deploy to heroku

1. Change `apiUrl` at the top of `Stories.js` to your API url (see the
   instructions in `backend/README.md`)
2. Use
   [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)
   with one caveat: since the app is not in the root of the repository, replace
   the push step with (assuming `cwd` is root) `git subtree push --prefix frontend heroku master`
