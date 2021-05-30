import { useState } from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Checkbox,
  makeStyles,
} from "@material-ui/core";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

const useStyles = makeStyles((theme) => ({
  listItem: {
    borderBottom: "1px solid #ccc",
    textTransform: "capitalize",
  },
  contactName: {
    fontWeight: "bold",
  },
  phoneIcon: {
    fontSize: "21px",
  },
  listItemIcon: {
    minWidth: "35px",
  },
  phoneNumber: {
    color: "#676767",
  },
}));

export function ContactItem({ data, labelId }) {
  const { id, name, phone } = data;
  const [isChecked, setChecked] = useState(false);
  const classes = useStyles();
  const handleToggle = () => {
    setChecked((prevState) => {
      if (prevState === false) {
        console.log(`Zaznaczono element o indeksie: ${id}`);
      } else {
        console.log(`Odznaczono element o indeksie: ${id}`);
      }
      return !prevState;
    });
  };

  return (
    <ListItem
      component="li"
      button
      className={classes.listItem}
      onClick={handleToggle}
    >
      <Box flexGrow={1}>
        <ListItemText
          id={labelId}
          primary={name}
          primaryTypographyProps={{ variant: "inherit" }}
          className={classes.contactName}
        />
        <Box display="flex" alignItems="center">
          <ListItemIcon className={classes.listItemIcon}>
            <PhoneIphoneIcon className={classes.phoneIcon} />
          </ListItemIcon>
          <ListItemText
            id={labelId}
            primary={phone}
            primaryTypographyProps={{ variant: "inherit" }}
            className={classes.phoneNumber}
          />
        </Box>
      </Box>
      <>
        <Checkbox
          edge="end"
          checked={isChecked}
          inputProps={{ "aria-labelledby": labelId }}
        />
      </>
    </ListItem>
  );
}

ContactItem.propTypes = {
  data: PropTypes.object,
  labelId: PropTypes.string,
};
