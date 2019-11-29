import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  App: {
    backgroundImage:
      "url(https://farm8.staticflickr.com/7358/27284179352_0974613f78_b.jpg)",
    height: "100vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  paper: {
    margin: 20,
    padding: 20,
    maxWidth: 700,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    opacity: 0.9
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  formElement: {
    marginTop: "10px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  storyContainer: {
    marginBottom: "10px"
  },
  story: {
    whiteSpace: "pre-line",
    fontFamily: "'Lovers Quarrel', cursive",
    fontSize: "2rem"
  },
  title: {
    fontFamily: "'Lovers Quarrel', cursive"
  },
  topDrawer: {
    width: "auto"
  },
  ccLicenseType: {
    marginRight: "5px"
  },
  ccImageLink: {
    display: "inline-block",
    whiteSpace: "none",
    marginTop: "2px",
    marginLeft: "3px",
    height: "22px !important"
  },
  licenseImage: {
    height: "inherit",
    marginRight: "3px",
    display: "inline-block"
  }
}));

export { useStyles };
