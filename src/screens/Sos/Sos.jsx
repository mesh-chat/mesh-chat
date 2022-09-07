import {HomeView} from "../Home/HomeStyles";
import {FlatList, Text, TouchableOpacity} from "react-native";
import {SosButton, SosDescription} from "./SosStyles";

export const SosScreen = ({navigation}) => {
    navigation.setOptions("SOS");

    return (
        <HomeView>
            <SosDescription>
                { 'Якщо ви знаходитеся без звязку та вам потрібна термінова допомога, увімкніть геолокацію та натисніть на кнопку. Ваші кординати будуть направлені усім користувачам поблизу' }
            </SosDescription>
            <TouchableOpacity onPress={() => (alert("SOOOOOOOOOOOOOOOS"))}>
                <SosButton>{'SOS'}</SosButton>
            </TouchableOpacity>
        </HomeView>
    );
}
