import * as Contacts from "expo-contacts";
import {HomeView} from "../Home/HomeStyles";
import {FlatList, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {Contact} from "../../components/Contact";

export const DialogsScreen = ({navigation}) => {
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
            <FlatList data={contacts} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Dialog', {
                    name: item.name,
                    phoneNumbers: item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number
                })}>
                    <Contact name={item.name} phoneNumbers={item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number} />
                </TouchableOpacity>
            )}/>
        </HomeView>
    );
}