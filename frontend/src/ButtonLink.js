import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";

export default function ButtonLink(props) {
  const { to, children, className } = props;

  const renderLink = React.useMemo(
    () =>
      // Lint false positive discussed here:
      // https://github.com/yannickcr/eslint-plugin-react/issues/2269
      // Fixed, but not yet released as of this writing
      // eslint-disable-next-line
      React.forwardRef((itemProps, ref) => (
        <Link to={to} {...itemProps} ref={ref} />
      )),
    [to]
  );

  return (
    <Button
      type="button"
      color="primary"
      variant="contained"
      component={renderLink}
      className={className}
    >
      {children}
    </Button>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string
};
