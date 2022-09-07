import {Text, TouchableOpacity} from 'react-native';
import {HomeView} from "./HomeStyles";
import styled from "styled-components/native";

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`
export const HomeScreen = ({navigation}) => {
    navigation.setOptions("Home");
    return (
        <HomeView>
            <TouchableOpacity onPress={() => navigation.navigate('Dialogs', {})}>
                <PostText> {"Зв'язок"} </PostText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SOS', {})}>
                <PostText> {"SOS"} </PostText>
            </TouchableOpacity>
        </HomeView>
    );
}