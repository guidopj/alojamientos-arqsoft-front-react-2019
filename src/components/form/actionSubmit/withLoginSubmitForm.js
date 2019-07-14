import { withHandlers } from "recompose";
import services from "../../../services"

const handleSubmit = (props) => {
    console.log(props);
    //services.login(data)
  }

  const withSubmitForm = withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      handleSubmit(props);
    }
  });
  
  export default withSubmitForm;