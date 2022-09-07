import {DialogDate, DialogDetails, DialogImage, DialogTitle, DialogView} from "../screens/Dialogs/Dialog/DialogStyles";

export const Contact = ({ name, phoneNumbers }) => {
    console.log(phoneNumbers)
    return (
        <DialogView>
            <DialogDetails>
                <DialogTitle>{ name }</DialogTitle>
                <DialogTitle>{ phoneNumbers }</DialogTitle>
            </DialogDetails>
        </DialogView>)
}
