// import React from 'react';
// import {Alert, TouchableOpacity, View,StyleSheet, Animated, FlatList, Image, Dimensions} from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import styled from "styled-components/native";
// import { Header} from '../../components/items/Header';
// import {BottomMenu} from '../../components/items/BottomMenu';

// //Я хочу попробовать повторить Дизайн Дии, чтоб дать жюри опыт пользования апкой так, как мы это видим. Но у меня ща нет возможности смотреть чё я верстаю (писал в чате),
// //поэтому вынес это в отдельный файл, чтоб баги тут не влияли на баги в том, чтоб тебе уже надо юзать. Ночью доверстаю, думаю, и перенесу в Home, эту страницу удалю потом

// const {width, height} = Dimensions.get('screen');

// export default function Diia() {
//     return ( 
//         <View style = {StyleSheet.container}>
//             <StatusBar hidden />
//             <Animated.FlatList         
//                data={DATA}
//                keyExtractor={item => item.key}
//                horizontal
//                showsHorizontalScrollIndicator={false}
//                renderItem={({item}) => {
//                 return <View style={{width, justifyContent: 'center', alignItems: }}>
//                     <Image source={{uri:item.image}} style={{width:width/>2, height: width/2, resizeMode: 'containe',}}
//                 </View>
//                }}
//         </View>
//     )
// }