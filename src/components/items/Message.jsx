import {Text, View} from "react-native";
import {MyMessageView} from "./MessageStyles";

export const Message = ({ message, date }) => {
    if (message.is_my_message) {
        return (
            <MyMessageView>
                <Text>{message.message_text}</Text>
                <Text>{date}</Text>
            </MyMessageView>
        )
    }

    return (
        <View>
            <Text>{message.message_text}</Text>
            <Text>{date}</Text>
        </View>
    )
}