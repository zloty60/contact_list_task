import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbarTitle: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.navbarTitle}>Lista kontaktów</Typography>
      </Toolbar>
    </AppBar>
  );
}
