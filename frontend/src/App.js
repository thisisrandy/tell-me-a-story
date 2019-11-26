import React, { useState } from "react";
import {
  TextField,
  CssBaseline,
  Button,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import HideOnScroll from "./HideOnScroll";
import PeterRabbit from "./peter_rabbit.jpg";

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
    maxWidth: 700
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  story: {
    whiteSpace: "pre-line",
    fontFamily: "'Lovers Quarrel', cursive",
    fontSize: "2rem"
  },
  title: {
    fontFamily: "'Lovers Quarrel', cursive"
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
      // note that it's still safe to use prompt because it remains stale
      // inside the closure
      setStories([
        ...stories,
        {
          id: id,
          prompt: prompt,
          story: "... (composing. This will take a minute or two)",
          isGenerating: true
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
          story: json.story,
          isGenerating: false
        }
      ]);
      setPromptDisabled(false);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Menu />
            </IconButton>
            <Typography variant="h3" className={classes.title}>
              Tell Me a Story
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.content}>
        <img src={PeterRabbit} alt="Peter Rabbit" />
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
        {stories
          .slice(0)
          .reverse()
          .map(({ id, prompt, story, isGenerating }) => (
            <Paper key={id} className={classes.paper}>
              <Typography component="p">
                <span className={classes.story}>{prompt}</span>
                <span className={isGenerating ? "" : classes.story}>
                  {isGenerating ? <i>{story}</i> : story}
                </span>
              </Typography>
            </Paper>
          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
