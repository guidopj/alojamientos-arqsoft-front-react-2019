import { withHandlers } from "recompose";
import services from "../../../services"

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
  if (!province || !state || !address || !type || !category) {
    return;
  }

  console.log("fdsfds")

  const acc = {
    province: province.value,
    state: state.value,
    address: address.value,
    type: type.value,
    category: category.value 
  };

  services.createAccommodation(acc)
};

const withSubmitForm = withHandlers({
  onSubmit: (props) => () => handleSubmit(props),
  clearFields: (props) => clearFields(props)
});


export default withSubmitForm;