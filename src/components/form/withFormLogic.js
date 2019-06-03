import { compose } from "recompose";

import initialState from "./initialState";
import withSubmitForm from "./actionSubmit/withSubmitForm";

export default compose(
    initialState,
    withSubmitForm,
);