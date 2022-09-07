import {DialogDate, DialogDetails, DialogImage, DialogTitle, DialogView} from "./DialogStyles";

export const DialogScreen = ({ route, navigation }) => {
    console.log(route.phoneNumbers)
    const { name, phoneNumbers } = route.params;
    navigation.setOptions({title: name});
    return (
        <DialogView>
            {/*<DialogImage source={{uri: imageUrl}}/>*/}
            <DialogDetails>
                <DialogTitle>{ name }</DialogTitle>
                <DialogDate> { phoneNumbers } </DialogDate>
            </DialogDetails>
        </DialogView>)
}
