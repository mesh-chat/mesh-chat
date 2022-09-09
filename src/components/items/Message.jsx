import {Text, View} from "react-native";

export const Message = ({ message, date }) => {
    return (
        <View>
            <Text>{message.message_text}</Text>
            <Text>{date}</Text>
        </View>
    )
}