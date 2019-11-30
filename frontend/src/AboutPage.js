import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./useStyles";
import clsx from "clsx";
import HomeButton from "./HomeButton";
import ExternalLink from "./ExternalLink";

function Paragraph({ children }) {
  const classes = useStyles();

  return (
    <Typography
      variant="body1"
      className={clsx(classes.formElement, classes.selfStart)}
    >
      {children}
    </Typography>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any.isRequired
};

export default function AboutPage() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.formElement}>
          What is this strangeness?
        </Typography>

        <Paragraph>
          This is what happens when a computer reads around 100 children&apos;s
          books and then decides it can write its own. Don&apos;t quit your day
          job, computer...
        </Paragraph>

        <Paragraph>
          In all seriousness, though, when you press &quot;Generate Story&quot;
          on the main page, you are interacting with a near state-of-the-art{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Language_model#Neural_network">
            Neural Language Model
          </ExternalLink>
          , a smaller version of{" "}
          <ExternalLink href="https://openai.com/blog/better-language-models/">
            GPT-2
          </ExternalLink>
          , which has been trained to predict the next word given some context
          over 40GB of high-quality internet text. Then, the model was further{" "}
          <ExternalLink href="https://flyyufelix.github.io/2016/10/03/fine-tuning-in-keras-part1.html">
            fine-tuned
          </ExternalLink>{" "}
          for this site on around 100 children&apos;s stories made available
          through{" "}
          <ExternalLink href="https://www.gutenberg.org/">
            Project Gutenberg
          </ExternalLink>{" "}
          via the{" "}
          <ExternalLink href="https://research.fb.com/downloads/babi/">
            bAbI
          </ExternalLink>{" "}
          project.
        </Paragraph>

        <Paragraph>
          The result is model that can (or at least tries to) write stories in
          the combined styles of Charles Dickens, Harriet Elisabeth Beecher
          Stowe, Lewis Carroll, and 11 other well-loved authors. If you
          haven&apos;t already, try it out!
        </Paragraph>

        <Paragraph>
          For a great many more technical details and fully-open-sourced code,
          have a look at the{" "}
          <ExternalLink href="https://github.com/thisisrandy/tell-me-a-story">
            Github page
          </ExternalLink>
          .
        </Paragraph>
        <HomeButton />
      </Paper>
    </div>
  );
}
