import { compose } from "recompose";

import addAcommodationInitialState from "./addAcommodationInitialState";
import withAddAcommodationSubmitForm from "../actionSubmit/withAddAcommodationSubmitForm";

export default compose(
    addAcommodationInitialState,
    withAddAcommodationSubmitForm,
);