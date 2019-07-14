import { withHandlers } from "recompose";
import {API} from "../../../services"

const handleSubmit = (props) => {
    console.log("PEPITO")
    console.log(props)
    //API.register(props)
  }

  const withSubmitForm = withHandlers({
    onRegister: props => e => {
      
      handleSubmit(props);
    }
  });
  
  export default withSubmitForm;