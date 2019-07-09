import { compose } from "recompose";

import initialState from "./addAcommodationInitialState";
import withAddAcommodationSubmitForm from "../actionSubmit/withAddAcommodationSubmitForm";

export default compose(
    initialState,
    withAddAcommodationSubmitForm,
);