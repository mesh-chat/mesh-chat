import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {DialogScreen} from "./Dialogs/Dialog/Dialog";
import {DialogsScreen} from "./Dialogs/Dialogs";
import {SosScreen} from "./Sos/Sos";
import HomeScreenContainer from "./Home/HomeContainer";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screen>
                <Stack.Screen name="Home" component={HomeScreenContainer} options={{title: 'Home'}} />
                <Stack.Screen name="Dialogs" component={DialogsScreen} options={{title: 'Dialogs'}}/>
                <Stack.Screen name="Dialog" component={DialogScreen} options={{title: 'Dialog'}}/>
                <Stack.Screen name="SOS" component={SosScreen} options={{title: 'SOS'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}