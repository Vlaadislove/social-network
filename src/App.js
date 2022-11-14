import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer
                // state={props.state.dialogPage}
                // dispatch={props.dispatch}
                />
              }
            />
            <Route path={"/profile"} element={<ProfileContainer />} />
            <Route
              path="/profile/:userId"
              element={
                <ProfileContainer
                // profilePage={props.state.profilePage}
                // dispatch={props.dispatch}
                // addPost={props.addPost}
                // onPostChange={props.onPostChange}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
