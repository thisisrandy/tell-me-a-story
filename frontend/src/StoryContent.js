import React from "react";
import PropTypes from "prop-types";
import { CardContent, Typography, CircularProgress } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./useStyles";

export default function StoryContent({ prompt, story, isGenerating }) {
  const classes = useStyles();

  return (
    <CardContent className={classes.cardContent}>
      <Typography
        component="p"
        className={clsx({
          [classes.storyContainerGenerating]: isGenerating
        })}
      >
        <span className={classes.story}>
          {prompt}
          {isGenerating && " ..."}
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
  );
}

StoryContent.propTypes = {
  prompt: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
  isGenerating: PropTypes.bool.isRequired
};
