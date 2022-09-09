import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {BottomMenuStyle} from "./BottomMenuStyles";
import {buttonsData} from "./ButtonsData";

export const BottomMenu = ({ navigation }) => {
    return (
        <BottomMenuStyle>
            {
                buttonsData.map(item => (
                    <View style={{alignItems: "center"}}>
                        <TouchableOpacity onPress={() => navigation.navigate(item.navigation, {})}>
                            <Image source={item.image} style={{width: item.width, height: item.height, marginTop: item.marginTop}}/>
                        </TouchableOpacity>
                        <Text>{item.name}</Text>
                    </View>
                ))
            }
        </BottomMenuStyle>
    )
}