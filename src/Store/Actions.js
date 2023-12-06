import * as api from "./Apis";

export const fetchAllUSersData = (pageNo) => async (dispatch) => {
  try {
    const { data } = await api.getAllUser(pageNo);

    dispatch({ type: "FETCH_ALL_USERS_DATA", payload: data.users });
    dispatch({ type: "SET_PAGES", payload: data.TOTALPAGES });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserBySearchQuery = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await api.getUserBySearchQuery(searchQuery);

    dispatch({ type: "FETCH_USERS_BY_SEARCHQUERY", payload: data });
    dispatch({ type: "SET_PAGES", payload: data.TOTALPAGES });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserByFilter = (filterData) => async (dispatch) => {
  try {
    const { data } = await api.getUserByFilter(filterData);
    dispatch({ type: "FETCH_USERS_BY_Filter", payload: data });
    dispatch({ type: "SET_PAGES", payload: data.TOTALPAGES });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUserById(id);
    dispatch({ type: "FETCH_USERS_BY_ID", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllTeamsData = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTeam();

    dispatch({ type: "FETCH_ALL_TEAM_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const creatTeam = (teamData) => async (dispatch) => {
  try {
    const { data } = await api.createTeam(teamData);

    dispatch({ type: "POST_TEAM_DATA", payload: data });
    dispatch(fetchAllTeamsData());
  } catch (error) {
    console.log(error);
  }
};
