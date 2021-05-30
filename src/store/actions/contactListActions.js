import axios from "axios";

import { contactListActions } from "./../actionConstants";

export const fetchContactList = () => async (dispatch) => {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    dispatch({
      type: contactListActions.FETCH_CONTACTS_START,
    });
    const { data } = await axios.get(url);
    dispatch({
      type: contactListActions.FETCH_CONTACTS_SUCCESS,
      payload: data,
    });
    const sortedByLastName = sortByLastName([...data]);
    dispatch({
      type: contactListActions.SORT_LASTNAME,
      payload: sortedByLastName,
    });
  } catch (err) {
    dispatch({
      type: contactListActions.FETCH_CONTACTS_FAIL,
    });
  }
};

const compareLastName = (a, b) => {
  const A = a.name;
  const B = b.name;
  let comparison = 0;
  if (A > B) {
    comparison = 1;
  } else if (A < B) {
    comparison = -1;
  }
  return comparison;
};

const reverseName = (name) => {
  const arr = name.toLowerCase().split(" ");
  if (arr[0] === "mrs." || arr[0] === "mr.") {
    const test = arr[0];
    arr.splice(0, 1);
    arr.reverse();
    arr.unshift(test);
    return arr.join(" ");
  }
  return arr.reverse().join(" ");
};

const sortByLastName = (data) => {
  data.forEach((el, i) => {
    el.name = reverseName(el.name);
  });
  return data.sort(compareLastName);
};
