import { withHandlers } from "recompose"
import {API} from "../../../services"

const clearFields = ({
  province,
  state,
  address,
  type,
  category
}) => {
  province.value = ""
  state.value = ""
  address.value = ""
  type.value = ""
  category.value = ""

}

const handleSubmit = ({
  province,
  state,
  address,
  type,
  category
}) => {
  if (!province.value || !state.value || !address.value || !type.value || !category.value) {
    return;
  }

  

  const acc = {
    town: province.value,
    state: state.value,
    address: address.value,
    type_code: type.value,
    category: category.value 
  };

  API.createAccommodation(acc)
};

const withSubmitForm = withHandlers({
  onSubmit: (props) => () => handleSubmit(props),
  clearFields: (props) => clearFields(props)
});


export default withSubmitForm;