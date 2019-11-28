import React, { useState } from "react";
import PeterRabbit from "./peter_rabbit.jpg";
import {
  TextField,
  Button,
  Paper,
  Typography,
  CircularProgress
} from "@material-ui/core";
import { useStyles } from "./useStyles";
import { useStateWithLocalStorage } from "./useStateWithLocalStorage";

// const apiUrl = "https://story-teller-3vkz2hdbua-ue.a.run.app/story?quote_style=cursive&";
// const storyLength = 500;
const apiUrl = "http://0.0.0.0:8008/story?quote_style=cursive&";
const storyLength = 50;

export default function Stories() {
  const classes = useStyles();
  const [prompt, setPrompt] = useState("");
  const [promptDisabled, setPromptDisabled] = useState(false);
  const handlePromptUpdate = ({ target }) => setPrompt(target.value);
  const [stories, setStories] = useStateWithLocalStorage(
    "stories",
    [],
    story => !story.isGenerating
  );

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
    <div className={classes.content}>
      <img src={PeterRabbit} alt="Peter Rabbit" />
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            name="prompt"
            className={classes.formElement}
            label={promptDisabled ? "Composing..." : "Story prompt"}
            value={prompt}
            onChange={handlePromptUpdate}
            autoFocus={true}
            margin="normal"
            helperText={
              'Try "Once upon a time." The computer will tell a different story every time!'
            }
            disabled={promptDisabled}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.formElement}
            disabled={promptDisabled}
          >
            Generate Story
          </Button>
        </form>
      </Paper>
      {stories
        .slice(0)
        .reverse()
        .map(({ id, prompt, story, isGenerating }) => (
          <Paper key={id} className={classes.paper}>
            <Typography component="p" className={classes.storyContainer}>
              <span className={classes.story}>
                {prompt}
                {isGenerating && "..."}
              </span>
              {isGenerating ? (
                <span>
                  <br />
                  <i>{"(composing. This will take a minute or two)"}</i>
                </span>
              ) : (
                <span className={classes.story}>{story}</span>
              )}
            </Typography>
            {isGenerating && <CircularProgress color="secondary" />}
          </Paper>
        ))}
    </div>
  );
}
