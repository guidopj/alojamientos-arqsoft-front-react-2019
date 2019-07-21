import { withHandlers } from "recompose";
import services from "../../../services"

const handleSubmit = (props) => {
    services.login(props.username,props.password)
  }

  const withSubmitForm = withHandlers({
    onSubmit: (props) => () => handleSubmit(props),
  });
  
  export default withSubmitForm;