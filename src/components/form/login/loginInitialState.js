import { withStateHandlers } from "recompose";

const initialState = {
    username: { value: "" },
    password: { value: "" },
};

const onChangeUsername = () => event => ({
    username: {
      value: event.target.value,
    }
  });

  const onChangePassword = () => event => ({
    password: {
      value: event.target.value,
    }
  });

const withTextFieldState = withStateHandlers(initialState, {
    onChangeUsername,
    onChangePassword
});

export default withTextFieldState;