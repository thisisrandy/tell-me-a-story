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
    maxWidth: 700
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  story: {
    whiteSpace: "pre-line",
    fontFamily: "'Lovers Quarrel', cursive",
    fontSize: "2rem"
  },
  title: {
    fontFamily: "'Lovers Quarrel', cursive"
  }
}));

export { useStyles };
