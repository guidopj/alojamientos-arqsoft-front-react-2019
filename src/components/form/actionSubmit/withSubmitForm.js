import { withHandlers } from "recompose";
import axios from "axios";

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

  const data = {
    province: province.value,
    state: state.value,
    address: address.value,
    type: type.value,
    category: category.value 
  };

  axios.post('http://127.0.0.1:8000/alojamiento/crearAlojamiento', data);
};

const withSubmitForm = withHandlers({
  onSubmit: (props) => () => handleSubmit(props),
  clearFields: (props) => clearFields(props)
});

export default withSubmitForm;