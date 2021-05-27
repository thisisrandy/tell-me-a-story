import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Button,
  Paper,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./useStyles";

const apiUrl =
  "https://story-teller-3vkz2hdbua-ue.a.run.app/story?quote_style=cursive&";
const storyLength = 500;

export default function StoryForm({ stories, setStories }) {
  const classes = useStyles();
  const [prompt, setPrompt] = useState("");
  const [promptDisabled, setPromptDisabled] = useState(false);
  const [clearAllDialogOpen, setClearAllDialogOpen] = useState(false);

  const handlePromptUpdate = ({ target }) => setPrompt(target.value);

  const handleSubmit = async (e) => {
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
          isGenerating: true,
        },
      ]);
      const res = await fetch(
        `${apiUrl}length=${storyLength}&prompt=${encodeURI(prompt)}`
      );
      const json = await res.json();
      // stories is stale inside this closure. we can get the fresh value by
      // using a functional update
      setStories((stories) => [
        ...stories.slice(0, stories.length - 1),
        {
          id: id,
          prompt: json.prompt,
          story: json.story,
          isGenerating: false,
        },
      ]);
      setPromptDisabled(false);
    }
  };

  return (
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
        <span className={clsx(classes.formElement, classes.buttonsContainer)}>
          <Tooltip title="Generate a new story using the prompt you typed">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={promptDisabled}
            >
              Generate Story
            </Button>
          </Tooltip>
          <Tooltip title="Delete all generated stories">
            <Button
              color="primary"
              variant="contained"
              disabled={promptDisabled || stories.length === 0}
              onClick={() => setClearAllDialogOpen(true)}
            >
              Clear All
            </Button>
          </Tooltip>
          <Dialog
            open={clearAllDialogOpen}
            onClose={() => setClearAllDialogOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                All generated stories will be permanently deleted
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setClearAllDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setStories([]);
                  setClearAllDialogOpen(false);
                }}
              >
                Proceed
              </Button>
            </DialogActions>
          </Dialog>
        </span>
      </form>
    </Paper>
  );
}

StoryForm.propTypes = {
  stories: PropTypes.array.isRequired,
  setStories: PropTypes.func.isRequired,
};
