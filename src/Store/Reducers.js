export const userReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS_DATA":
      return { ...state, data: action.payload };
    case "FETCH_USERS_BY_ID":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export const searchReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_USERS_BY_SEARCHQUERY":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export const filterReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_USERS_BY_Filter":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export const paginationReducer = (state = { page: 0 }, action) => {
  switch (action.type) {
    case "SET_PAGES":
      return { ...state, page: action.payload };

    default:
      return state;
  }
};

export const teamReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_ALL_TEAM_DATA":
      return { ...state, data: action.payload };
      case "POST_TEAM_DATA":
        return { ...state, data: action.payload };
  
    default:
      return state;
  }
};
