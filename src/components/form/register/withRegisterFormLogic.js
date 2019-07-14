import { compose } from "recompose";

import registerInitialState from "./registerInitialState";
import withRegisterSubmitForm from "../actionSubmit/withRegisterSubmitForm";

export default compose(
    registerInitialState,
    withRegisterSubmitForm,
);