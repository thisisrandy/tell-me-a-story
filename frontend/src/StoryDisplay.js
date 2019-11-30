import React from "react";
import PropTypes from "prop-types";
import { Card } from "@material-ui/core";
import { useStyles } from "./useStyles";
import StoryContent from "./StoryContent";
import StoryActions from "./StoryActions";

export default function StoryDisplay({ stories, setStories }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {stories
        .slice(0)
        .reverse()
        .map(({ id, prompt, story, isGenerating }) => (
          <Card key={id} className={classes.card}>
            <StoryContent
              prompt={prompt}
              story={story}
              isGenerating={isGenerating}
            />
            {!isGenerating && (
              <StoryActions id={id} stories={stories} setStories={setStories} />
            )}
          </Card>
        ))}
    </React.Fragment>
  );
}

StoryDisplay.propTypes = {
  stories: PropTypes.array.isRequired,
  setStories: PropTypes.func.isRequired
};
