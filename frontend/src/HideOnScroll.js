// Copied directly from
// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/app-bar/HideAppBar.js
import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import Slide from "@material-ui/core/Slide";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger(window());

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
};
