import * as api from "./Apis";

export const fetchAllUSersData = (pageNo) => async (dispatch) => {
  try {
    const { data } = await api.getAllUser(pageNo);
    console.log(data);

    dispatch({ type: "FETCH_ALL_USERS_DATA", payload: data.users });
    dispatch({ type: "SET_PAGES", payload: data.TOTALPAGES });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserBySearchQuery = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await api.getUserBySearchQuery(searchQuery);
    console.log(data);

    dispatch({ type: "FETCH_USERS_BY_SEARCHQUERY", payload: data });
    dispatch({ type: "SET_PAGES", payload: data.TOTALPAGES });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserByFilter = (filterData) => async (dispatch) => {
  try {
    const { data } = await api.getUserByFilter(filterData);
    console.log(data);
    dispatch({ type: "FETCH_USERS_BY_Filter", payload: data });
    dispatch({ type: "SET_PAGES", payload: data.TOTALPAGES });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUserById(id);
    console.log(data);
    dispatch({ type: "FETCH_USERS_BY_ID", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllTeamsData = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTeam();
    console.log(data);

    dispatch({ type: "FETCH_ALL_TEAM_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const creatTeam = (teamData) => async (dispatch) => {
  try {
    const { data } = await api.createTeam(teamData);
    console.log(data);

    dispatch({ type: "POST_TEAM_DATA", payload: data });
    dispatch(fetchAllTeamsData());
  } catch (error) {
    console.log(error);
  }
};
