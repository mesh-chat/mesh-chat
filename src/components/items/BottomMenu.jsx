import React from "react";
import { View, Text} from "react-native";
import { BottomMenuStyle } from "./BottomMenuStyles";

export const BottomMenu = () => {

    return (
        <View>
            <BottomMenuStyle>
                <View>
                    {
                        buttons (
                            {
                                image: '../../icons/Documents icon.png',
                                name: 'Документи',
                            },
                            {
                                image: '../../icons/Services icon',
                                name: 'Послуги',
                            },
                            {
                                image: '../../icons/Notification icon',
                                name: 'Повідомлення',
                            },
                            {
                                image: '../../icons/Chat icon',
                                name: "Зв'язок",
                            },
                            {
                                image: '../../icons/Menu icon',
                                name: 'Меню',
                            },
                        )
                    }
                </View>
            </BottomMenuStyle>
        </View>
    )
}

export default Categories