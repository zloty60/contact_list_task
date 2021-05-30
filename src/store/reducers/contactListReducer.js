import { contactListActions } from "./../actionConstants";

const initialState = {
  contactList: [],
  isLoading: false,
  isError: false,
};

export const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactListActions.FETCH_CONTACTS_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        contactList: [],
      };
    case contactListActions.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contactList: action.payload,
      };
    case contactListActions.FETCH_CONTACTS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case contactListActions.SORT_LASTNAME:
      return {
        ...state,
        contactList: action.payload,
      };
    default:
      return state;
  }
};
