import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  CircularProgress,
  Box,
  makeStyles,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { fetchContactList } from "./../store/actions/contactListActions";
import { Navbar } from "./../components/navbar/Navbar";
import { Search } from "./../components/search/Search";
import { ContactList } from "./../components/contacts/ContactList";

const useStyles = makeStyles((theme) => ({
  loader: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

export function RootView() {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchContactList());
  }, [dispatch]);

  const { contactList, isError, isLoading } = useSelector(
    (state) => state.contact
  );

  const [searchValue, setSearchValue] = useState("");

  if (isError) {
    return (
      <>
        <Navbar />
        <Alert severity="error">coś poszło nie tak</Alert>;
      </>
    );
  }

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {contactList.length > 0 && (
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          )}
          <Container>
            <ContactList contactList={contactList} searchValue={searchValue} />
          </Container>
        </>
      )}
    </>
  );
}
