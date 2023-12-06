import React from "react";
import {  Route, Routes } from "react-router-dom";
import UsersList from "./UsersList";
import UserList from "./UserList";
import Team from "./Team";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="user/:id" element={<UserList />} />
        <Route path="user/:id" element={<UserList />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
};

export default Router;
