import React from "react";
import {View, Text, Button, TouchableOpacity, Image} from "react-native";
import {BottomMenuStyle} from "./BottomMenuStyles";

export const BottomMenu = () => {
    const buttonsData = [
        {
            image: require('../../icons/DocumentsIcon.png'),
            name: 'Документи',
            width: 20,
            height: 20,
        },
        {
            image: require('../../icons/ServicesIcon.png'),
            name: 'Послуги',
            width: 20,
            height: 20,
        },
        {
            image: require('../../icons/NotificationIcon.png'),
            name: 'Повідомлення',
            width: 20,
            height: 20,
        },
        {
            image: require('../../icons/ChatIcon.png'),
            name: "Зв'язок",
            width: 30,
            height: 20,
        },
        {
            image: require('../../icons/MenuIcon.png'),
            name: 'Меню',
            width: 20,
            height: 20,
        }
    ]

    return (
        <BottomMenuStyle>
            {
                buttonsData.map(item => (
                    <View>
                        <TouchableOpacity onPress={() => alert("Click")}>
                            <Image source={item.image} style={{width: item.width, height: item.height}}/>
                        </TouchableOpacity>
                        <Text>{item.name}</Text>
                    </View>
                ))
            }
        </BottomMenuStyle>
    )
}