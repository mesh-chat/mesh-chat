import {PhoneNumber, DialogDetails, DialogTitle, DialogView, MessagesView} from "./DialogStyles";
import {useEffect, useState} from "react";
import {messageQuery} from "../../../utils/queries_indexer";
import {FlatList, Text, View} from "react-native";
import {Message} from "../../../components/items/Message";
import {HeaderDialog} from "./HeaderDialog";

const indexerUrl = 'https://api.thegraph.com/subgraphs/name/mesh-chat/mesh-chat-indexer';

export const DialogScreen = ({ route, navigation }) => {
    let [messagesData, setMessagesData] = useState([]);

    const { name, phoneNumbers } = route.params;
    navigation.setOptions({title: name});

    useEffect(async () => {
        let myNumber = "066"
        let opponentNumber = "099"

        let incomingMessage = await loadMessages(myNumber, opponentNumber)
        let outgoingMessages = await loadMessages(opponentNumber, myNumber)

        let sortedMessagesData = [
            ...incomingMessage.map((message) => {
                return {
                    message_text: message.message_text,
                    timestamp: message.timestamp,
                    is_my_message: true,
                }
            }),
            ...outgoingMessages.map((message) => {
               return {
                   message_text: message.message_text,
                   timestamp: message.timestamp,
                   is_my_message: false,
               }
            })
        ].sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);
        setMessagesData(sortedMessagesData)
    }, [])

    const loadMessages = async (from, to) => {
        let query = messageQuery(from, to)
        try {
            const response =  await fetch(indexerUrl, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: query
            });

            const json = await response.json();
            return json.data.messages
        } catch (error) {
            console.log(error)
        }
    };

    const renderItem = ({ item }) => {
        let formattedDate = getFormattedDate(item.timestamp)

        return <Message message={item} date={formattedDate} />
    }

    const getFormattedDate = (timestamp) => {
        let len = timestamp.length
        let milliseconds = timestamp.slice(0, len - 6)

        let date = new Date(Number(milliseconds));

        let hours = date.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }

        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes
        }

        return  hours + ":" + minutes;
    }

    return (
        <DialogView>
            <HeaderDialog name={name} phoneNumbers={phoneNumbers} />
            <MessagesView>
                <FlatList data={messagesData} renderItem={renderItem} />
            </MessagesView>
        </DialogView>
    )
}