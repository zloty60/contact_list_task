import PropTypes from "prop-types";
import { TextField, Box, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchWrapper: {
    backgroundColor: "#ffffff",
    padding: theme.spacing(2),
  },
}));

export function Search({ searchValue, setSearchValue }) {
  const classes = useStyles();

  return (
    <Box className={classes.searchWrapper}>
      <Container>
        <TextField
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          fullWidth
          label="Szukaj po nazwie"
        />
      </Container>
    </Box>
  );
}

Search.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};
