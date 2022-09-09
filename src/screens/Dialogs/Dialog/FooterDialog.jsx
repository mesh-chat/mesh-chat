import React from "react";
import {View, Text, Image} from "react-native"
import {FooterDialogStyles} from "./FooterDialogStyles";

export const FooterDialog = () => {
    return  (
        <FooterDialogStyles>
            <Text>
                Напишіть повідомлення
            </Text>
            <Image source={require('../../../icons/Sendicon.png')}/>
        </FooterDialogStyles>
    )
}