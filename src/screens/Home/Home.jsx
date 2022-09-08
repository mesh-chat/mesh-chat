import {Alert, TouchableOpacity, View} from 'react-native';
import {HomeButton, HomeTextInput, HomeView} from "./HomeStyles";
import styled from "styled-components/native";
import { Header} from '../../components/items/Header';
import {BottomMenu} from '../../components/items/BottomMenu';

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

export const HomeScreen = ({navigation, phoneNumber, updatePhoneNumber}) => {
    navigation.setOptions("Home");
    let onChangePhoneNumber = (e) => {
        let phoneNumber = e.nativeEvent.text;
        updatePhoneNumber(phoneNumber)
    }

    return (
        <HomeView>
            <Header headerText={''}/>
            <HomeTextInput onChange={onChangePhoneNumber} placeholder="Enter your number: " value={phoneNumber}></HomeTextInput>
            <HomeButton title="Submit" onPress={() => Alert.alert("Надо либу подключить :(")} />
            <TouchableOpacity onPress={() => navigation.navigate('Dialogs', {})}>
                <PostText> {"Зв'язок"} </PostText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SOS', {})}>
                <PostText> {"SOS"} </PostText>
            </TouchableOpacity>
            <BottomMenu />
        </HomeView>
    );
}