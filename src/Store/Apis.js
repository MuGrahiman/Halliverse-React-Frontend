import axios from "axios";

const API = axios.create({
  baseURL: `https://halliverse-backend.onrender.com/api`,
  // baseURL: "http://localhost:4400/api",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile"))
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;

  return req;
});

export const getAllUser = (pageNo) => API.get("/user/data",{params:{pageNo}});
export const getUserById = (id) => API.get(`/user/${id}`);
export const getUserBySearchQuery = (searchQuery) =>
  API.get(`/user/search`,{params:{searchQuery}});
  export const getUserByFilter = ({filterOptions,sortOption,availableOption}) =>
  API.get(`/user/filter`,{params:{filterOptions,sortOption,availableOption}});

export const getAllTeam = () => API.get("/team");
export const createTeam = (teamData) => API.post("/team",teamData);

export const updateUser = (userData) => API.patch("");
export const dltUser = (userData) => API.delete("");
