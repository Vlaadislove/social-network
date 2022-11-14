import React from "react";
import { setAuthUserData } from "../../Reduxe/auth-reducer";
import { connect } from "react-redux";
import axios from "axios";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`,
        {
          withCredentials: true
          //   headers: {
          //     'Access-Control-Allow-Origin': '*',
          //     'API-KEY': 'a3dee610-8672-492e-bc57-a678ba9812e5'
        }
        // }
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { email, id, login } = response.data.data;
          this.props.setAuthUserData(email, id, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);