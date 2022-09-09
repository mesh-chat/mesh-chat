import {HeaderStyle} from "../../../components/items/HeaderStyles";
import {DialogTitle, PhoneNumber} from "./DialogStyles";
import {Button} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const HeaderDialog = ({name, phoneNumbers}) => {
    return (
        <HeaderStyle>
            <Button
                title="<-"
            />
            <DialogTitle>{name}</DialogTitle>
            <PhoneNumber> {phoneNumbers} </PhoneNumber>
        </HeaderStyle>
    );
}
