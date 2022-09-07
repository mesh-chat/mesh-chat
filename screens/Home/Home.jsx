import {Alert, TouchableOpacity} from 'react-native';
import {HomeButton, HomeTextInput, HomeView} from "./HomeStyles";
import styled from "styled-components/native";

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`
export const HomeScreen = ({navigation}) => {
    navigation.setOptions("Home");
    return (
        <HomeView>
            <HomeTextInput placeholder="Enter your number: "></HomeTextInput>
            <HomeButton title="Submit" onPress={() => Alert.alert("Надо либу подключить :(")} />
            <TouchableOpacity onPress={() => navigation.navigate('Dialogs', {})}>
                <PostText> {"Зв'язок"} </PostText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SOS', {})}>
                <PostText> {"SOS"} </PostText>
            </TouchableOpacity>
        </HomeView>
    );
}