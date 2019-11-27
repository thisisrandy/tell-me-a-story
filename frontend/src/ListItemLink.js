import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { ListItem } from "@material-ui/core";

export default function ListItemLink(props) {
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
    <ListItem button component={renderLink} className={className}>
      {children}
    </ListItem>
  );
}

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string
};
