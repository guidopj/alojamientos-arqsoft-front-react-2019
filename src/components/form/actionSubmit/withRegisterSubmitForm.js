import { withHandlers } from "recompose";
import {API} from "../../../services"

const handleRegister = (props) => {
    API.register(props)
  }

  const withSubmitForm = withHandlers({
    onRegister: props => event => {
      event.preventDefault();
      handleRegister(props);
    }
  });
  
  export default withSubmitForm;