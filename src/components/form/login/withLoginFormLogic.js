import { compose } from "recompose";

import loginInitialState from "./loginInitialState";
import withLoginSubmitForm from "../actionSubmit/withLoginSubmitForm";

export default compose(
    loginInitialState,
    withLoginSubmitForm,
);