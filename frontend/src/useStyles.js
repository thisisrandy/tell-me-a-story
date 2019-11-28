import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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
  defaultRoute: {
    marginTop: "10px"
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
  }
}));

export { useStyles };
