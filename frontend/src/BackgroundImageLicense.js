import React from "react";
import { Typography, Paper, Link } from "@material-ui/core";
import { useStyles } from "./useStyles";
import ButtonLink from "./ButtonLink";

export default function BackgroundImageLicense() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Paper className={classes.paper}>
        <Typography className={classes.formElement}>
          <Link
            href="https://www.flickr.com/photos/91894325@N08/27284179352"
            target="_blank"
            rel="noopener noreferrer"
          >
            &quot;Peter_Rabbit_Radishes_© Frederick Warne & Co., 2002&quot;
          </Link>{" "}
          by{" "}
          <Link
            href="https://www.flickr.com/photos/91894325@N08"
            target="_blank"
            rel="noopener noreferrer"
          >
            TaylorHerring
          </Link>{" "}
          is licensed under{" "}
          <Link
            className={classes.ccLicenseType}
            href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-ND 2.0
          </Link>
          <Link
            className={classes.ccImageLink}
            href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.licenseImage}
              src="https://search.creativecommons.org/static/img/cc_icon.svg"
              alt="creative commons icon"
            />
            <img
              className={classes.licenseImage}
              src="https://search.creativecommons.org/static/img/cc-by_icon.svg"
              alt="creative commons attribution icon"
            />
            <img
              className={classes.licenseImage}
              src="https://search.creativecommons.org/static/img/cc-nc_icon.svg"
              alt="creative commons non commercial icon"
            />
            <img
              className={classes.licenseImage}
              src="https://search.creativecommons.org/static/img/cc-nd_icon.svg"
              alt="creative commons no derivatives icon"
            />
          </Link>
        </Typography>
        <ButtonLink to="/stories" className={classes.formElement}>
          Return home
        </ButtonLink>
      </Paper>
    </div>
  );
}
