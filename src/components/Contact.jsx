import {DialogDetails, DialogTitle} from "../screens/Dialogs/Dialog/DialogStyles";
import {ContactView} from "./ContactStyles";

export const Contact = ({ name, phoneNumbers }) => {
    return (
        <ContactView>
            <DialogDetails>
                <DialogTitle>{ name }</DialogTitle>
                <DialogTitle>{ phoneNumbers }</DialogTitle>
            </DialogDetails>
        </ContactView>)
}
