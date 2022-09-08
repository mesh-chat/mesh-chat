import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {DialogScreen} from "./Dialogs/Dialog/Dialog";
import {DialogsScreen} from "./Dialogs/Dialogs";
import {SosScreen} from "./Sos/Sos";
import HomeScreenContainer from "./Home/HomeContainer";
import {DocumentsScreen} from "./Documents/Documents";
import {NotificationsScreen} from "./Dialogs/Notifications/Notifications";
import {ServicesScreen} from "./Dialogs/Services/Services";
import {MenuScreen} from "./Dialogs/Menu/Menu";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screen screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreenContainer} options={{title: 'Home'}} />
                <Stack.Screen name="Dialogs" component={DialogsScreen} options={{title: 'Dialogs'}}/>
                <Stack.Screen name="Dialog" component={DialogScreen} options={{title: 'Dialog'}}/>
                <Stack.Screen name="Documents" component={DocumentsScreen} options={{title: 'Documents'}}/>
                <Stack.Screen name="Notifications" component={NotificationsScreen} options={{title: 'Notifications'}}/>
                <Stack.Screen name="Services" component={ServicesScreen} options={{title: 'Services'}}/>
                <Stack.Screen name="Menu" component={MenuScreen} options={{title: 'Menu'}}/>
                <Stack.Screen name="SOS" component={SosScreen} options={{title: 'SOS'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}