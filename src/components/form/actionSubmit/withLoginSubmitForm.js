import { withHandlers } from "recompose";
import services from "../../../services"

const handleSubmit = (props) => {
    console.log("PEPITO")
    console.log(props)
    //services.register(data)
  }

  const withSubmitForm = withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      handleSubmit(props);
    }
  });
  
  export default withSubmitForm;