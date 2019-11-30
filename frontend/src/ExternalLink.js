import React from "react";
import PropTypes from "prop-types";
import { Link } from "@material-ui/core";

export default function ExternalLink({ href, children, ...props }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};
