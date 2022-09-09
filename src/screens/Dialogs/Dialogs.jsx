import * as Contacts from "expo-contacts";
import {HomeView} from "../Home/HomeStyles";
import {FlatList, TouchableOpacity, View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import {Contact} from "../../components/Contact";
import { Header } from "../../components/items/Header";
import { BottomMenu } from "../../components/items/BottomMenu";
import {ContactsStyle, ContactsTextStyle, Overlay, Search} from "./DialogsStyles";

export const DialogsScreen = ({ navigation }) => {
    const [contacts, setContacts] = useState();
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                let { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers]
                })
                if (data.length > 0) {
                    data = data.filter(item => item.name !== 'null null' && item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number)
                    setContacts(data)
                }
            }
        })()
    })

    return (
        <HomeView>
            <Header headerText={"Зв'язок"}/>
            <Overlay>
                <View>
                    <ContactsStyle>
                    <View>
                        <ContactsTextStyle>
                            <Text>{'Контакти'}</Text>
                        </ContactsTextStyle>
                    </View>
                </ContactsStyle>
                <FlatList data={contacts} renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Dialog', {
                        name: item.name,
                        phoneNumbers: item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number
                    })}>
                        <Contact name={item.name} phoneNumbers={item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number} />
                    </TouchableOpacity>
                )}/>
                </View>
            </Overlay>
            <BottomMenu navigation={navigation} />
        </HomeView>
    );
}