import { withStateHandlers } from "recompose";

const initialState = {
    username: { value: "" },
    password: { value: "" },
    confirm_password: { value: "" },
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

  const onChangeConfirmPassword = () => event => ({
    confirm_password: {
      value: event.target.value,
    }
  });

const registerInitialState = withStateHandlers(initialState, {
    onChangeUsername,
    onChangePassword,
    onChangeConfirmPassword
});

export default registerInitialState;