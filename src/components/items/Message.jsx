import {
    FriendDateText,
    FriendMessageText,
    FriendMessageView,
    MyDateText,
    MyMessageText,
    MyMessageView
} from "./MessageStyles";

export const Message = ({ message, date }) => {
    if (message.is_my_message) {
        return (
            <MyMessageView>
                <MyMessageText>{message.message_text}</MyMessageText>
                <MyDateText>{date}</MyDateText>
            </MyMessageView>
        )
    }

    return (
        <FriendMessageView>
            <FriendMessageText>{message.message_text}</FriendMessageText>
            <FriendDateText>{date}</FriendDateText>
        </FriendMessageView>
    )
}