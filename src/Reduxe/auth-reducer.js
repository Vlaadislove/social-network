const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

export const setAuthUserData = (email, userId, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { email, userId, login }
});

export default authReducer;