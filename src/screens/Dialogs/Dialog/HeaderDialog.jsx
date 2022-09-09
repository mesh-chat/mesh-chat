import {HeaderStyle} from "../../../components/items/HeaderStyles";
import {DialogTitle, PhoneNumber} from "./DialogStyles";

export const HeaderDialog = ({name, phoneNumbers}) => {
    return (
        <HeaderStyle>
            <DialogTitle>{name}</DialogTitle>
            <PhoneNumber> {phoneNumbers} </PhoneNumber>
        </HeaderStyle>
    );
}
