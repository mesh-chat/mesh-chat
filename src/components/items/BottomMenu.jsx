import React from "react";
import {View, Text, Button, TouchableOpacity, Image} from "react-native";
import {BottomMenuStyle} from "./BottomMenuStyles";

export const BottomMenu = () => {
    const buttonsData = [
        {
            image: '../../icons/Documents icon.png',
            name: 'Документи',
        },
        {
            image: '../../icons/Services icon.png',
            name: 'Послуги',
        },
        {
            image: '../../icons/Notification icon.png',
            name: 'Повідомлення',
        },
        {
            image: '../../icons/Chat icon.png',
            name: "Зв'язок",
        },
        {
            image: './MenuIcon.png',
            name: 'Меню',
        }
    ]

    return (
        <BottomMenuStyle>
            {
                buttonsData.map(item => (
                    <View>
                        <TouchableOpacity onPress={() => alert("Click")}>
                            <Image source={require(item.image)}/>
                        </TouchableOpacity>
                        <Text>{item.name}</Text>
                    </View>
                ))
            }
        </BottomMenuStyle>
    )
}