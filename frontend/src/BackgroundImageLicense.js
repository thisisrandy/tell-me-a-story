import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { useStyles } from "./useStyles";
import HomeButton from "./HomeButton";
import ExternalLink from "./ExternalLink";

export default function BackgroundImageLicense() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Paper className={classes.paper}>
        <Typography className={classes.formElement}>
          <ExternalLink href="https://www.flickr.com/photos/91894325@N08/27284179352">
            &quot;Peter_Rabbit_Radishes_© Frederick Warne & Co., 2002&quot;
          </ExternalLink>{" "}
          by{" "}
          <ExternalLink href="https://www.flickr.com/photos/91894325@N08">
            TaylorHerring
          </ExternalLink>{" "}
          is licensed under{" "}
          <ExternalLink
            className={classes.ccLicenseType}
            href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html"
          >
            CC BY-NC-ND 2.0
          </ExternalLink>
          <ExternalLink
            className={classes.ccImageLink}
            href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html"
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
          </ExternalLink>
        </Typography>
        <HomeButton />
      </Paper>
    </div>
  );
}
