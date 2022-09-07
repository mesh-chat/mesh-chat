import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./Home/Home";
import {DialogScreen} from "./Dialogs/Dialog/Dialog";
import {DialogsScreen} from "./Dialogs/Dialogs";
import {SosScreen} from "./Sos/Sos";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
                <Stack.Screen name="Dialogs" component={DialogsScreen} options={{title: 'Dialogs'}}/>
                <Stack.Screen name="Dialog" component={DialogScreen} options={{title: 'Dialog'}}/>
                <Stack.Screen name="SOS" component={SosScreen} options={{title: 'SOS'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}