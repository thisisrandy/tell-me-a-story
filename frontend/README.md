# Frontend

Begin by changing `apiUrl` at the top of [StoryForm.js](src/StoryForm.js) to your API url (see
the instructions in [backend/README.md](../backend/README.md)).

## Deploy to [ZEIT](https://zeit.co/)

1. Change [now.json](now.json) to your preferred project name
2. Follow the instructions [here](https://zeit.co/docs) to install and
   configure the `now` command line interface
3. With the `frontend` directory as `cwd`, run the command `now`

## Deploy to [Heroku](https://www.heroku.com/)

Use
[create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)
with one caveat: since the app is not in the root of the repository, replace
the push step with (assuming `cwd` is root) `git subtree push --prefix frontend heroku master`
