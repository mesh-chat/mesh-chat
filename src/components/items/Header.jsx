import React from "react";
import { View, Text} from "react-native"
import {SvgUri} from "react-native-svg"
import { HeaderStyle, Logo } from "./HeaderStyles";

export const Header = ({headerText}) => {

    return (
        <View>
            <HeaderStyle>
                <View>
                    <Logo>
                        <SvgUri
                            width="60"
                            height="60"
                            uri="https://upload.wikimedia.org/wikipedia/commons/8/89/DiiaLogo.svg"
                        />
                    </Logo>
                </View>
                <Text style={{
                        fontSize: 30,
                        }}> 
                    {headerText}
                </Text> 
            </HeaderStyle>
        </View>
    );
}