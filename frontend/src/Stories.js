import React from "react";
import { useStyles } from "./useStyles";
import { useStateWithLocalStorage } from "./useStateWithLocalStorage";
import StoryForm from "./StoryForm";
import StoryDisplay from "./StoryDisplay";

export default function Stories() {
  const classes = useStyles();
  const [stories, setStories] = useStateWithLocalStorage(
    "stories",
    [],
    story => !story.isGenerating
  );

  return (
    <div className={classes.content}>
      <StoryForm stories={stories} setStories={setStories} />
      <StoryDisplay stories={stories} setStories={setStories} />
    </div>
  );
}
