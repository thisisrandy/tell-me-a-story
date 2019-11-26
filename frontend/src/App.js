import React, { useState } from "react";
import {
  TextField,
  CssBaseline,
  Button,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";

// const apiUrl = "https://story-teller-3vkz2hdbua-ue.a.run.app/story?";
const apiUrl = "http://0.0.0.0:8008/story?";
const storyLength = 50;

const useStyles = makeStyles(theme => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  paper: {
    margin: 20,
    padding: 20,
    maxWidth: 800
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  const [prompt, setPrompt] = useState("");
  const [promptDisabled, setPromptDisabled] = useState(false);
  const handlePromptUpdate = ({ target }) => setPrompt(target.value);
  const [stories, setStories] = useState([]);
  const handleSubmit = async e => {
    e.preventDefault();
    if (prompt) {
      setPrompt("");
      setPromptDisabled(true);
      const id = Date.now();
      setStories([
        ...stories,
        {
          id: id,
          prompt: prompt,
          story: "Composing... (this will take a minute or two)"
        }
      ]);
      const res = await fetch(
        `${apiUrl}length=${storyLength}&prompt=${encodeURI(prompt)}`
      );
      const json = await res.json();
      // stories is stale inside this closure. we can get the fresh value by
      // using a functional update
      setStories(stories => [
        ...stories.slice(0, stories.length - 1),
        {
          id: id,
          prompt: json.prompt,
          story: json.story
        }
      ]);
      setPromptDisabled(false);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Tell Me a Story
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              name="prompt"
              label={
                promptDisabled
                  ? "Please wait for the computer to finish the story"
                  : "Story prompt"
              }
              value={prompt}
              onChange={handlePromptUpdate}
              autoFocus={true}
              margin="normal"
              helperText={
                'Try "Once upon a time." The computer will tell a different story every time!'
              }
              disabled={promptDisabled}
            />
            <Button type="submit" color="primary" variant="contained">
              Generate Story
            </Button>
          </form>
        </Paper>
        <List>
          {stories
            .slice(0)
            .reverse()
            .map(({ id, prompt, story }) => (
              <ListItem key={id}>
                <ListItemText primary={prompt} secondary={story} />
              </ListItem>
            ))}
        </List>
      </div>
    </React.Fragment>
  );
}

export default App;
