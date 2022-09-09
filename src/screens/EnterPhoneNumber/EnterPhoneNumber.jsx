import {Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {Header} from "../../components/items/Header";
import {HomeView} from "../Home/HomeStyles";
import {useState} from "react";

export const EnterPhoneNumberScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <HomeView>
            <Header headerText={"Зв'язок"}/>
            <View style={{alignItems: "center"}}>
                <Text style={{fontSize: 20, marginBottom: 5}}>{"Введіть номер телефону"}</Text>
                <TextInput style={styles.input} value={phoneNumber} onChange={(props) => {
                    let text = props.nativeEvent.text;
                    try {
                        let number = Number(text);
                        if (text.length <= 10 && !isNaN(number)) {
                            setPhoneNumber(text)
                        }
                    } catch (e) {}
                }}/>
                <TouchableOpacity
                    onPress={() => {
                        if (String(phoneNumber).length === 10) {
                            let number = "+38" + phoneNumber
                            console.log(number)
                        }
                    }}
                >
                    <Text>Далі</Text>
                </TouchableOpacity>
            </View>
        </HomeView>
    )
}


const styles = StyleSheet.create({
    input: {
        width: 100,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});