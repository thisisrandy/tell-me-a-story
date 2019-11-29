import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Card,
  CardActions,
  CardContent,
  Typography,
  CircularProgress,
  IconButton,
  Tooltip
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ClipboardIcon from "@material-ui/icons/Assignment";
import { useStyles } from "./useStyles";
import { useStateWithLocalStorage } from "./useStateWithLocalStorage";
import clsx from "clsx";
import * as clipboard from "clipboard-polyfill/dist/clipboard-polyfill.promise";
import dateFormat from "dateformat";

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

  const handleCopy = id => () => {
    const toCopy = stories.filter(s => s.id === id)[0];
    clipboard.writeText(toCopy.prompt + toCopy.story);
  };

  const handleDelete = id => () => {
    setStories(stories.filter(s => s.id !== id));
  };

  return (
    <div className={classes.content}>
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
          <Card key={id} className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography
                component="p"
                className={clsx({
                  [classes.storyContainerGenerating]: isGenerating
                })}
              >
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
              </Typography>{" "}
              {isGenerating && <CircularProgress color="secondary" />}
            </CardContent>
            {!isGenerating && (
              <CardActions className={classes.cardActions}>
                <Typography
                  variant="caption"
                  className={classes.cardActionElem}
                >
                  {"Generated at " + dateFormat(id)}
                </Typography>
                {[
                  {
                    label: "Copy story to clipboard",
                    onClick: handleCopy,
                    icon: <ClipboardIcon />
                  },
                  {
                    label: "Delete story",
                    onClick: handleDelete,
                    icon: <DeleteIcon />
                  }
                ].map(({ label, onClick, icon }) => (
                  <Tooltip key={label} title={label}>
                    <IconButton
                      className={classes.cardActionElem}
                      aria-label={label}
                      onClick={onClick(id)}
                    >
                      {icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </CardActions>
            )}
          </Card>
        ))}
    </div>
  );
}
