import React from 'react';
import 'react-native-gesture-handler';

// navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
// screens
import {Screen1} from './screens/Screen1';
import {Screen2} from './screens/Screen2';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Drawer.Screen
          name="screen1"
          options={{
            drawerLabel: 'First page Option',
            title: 'First Stack',
          }}
          component={Screen1}
        />
        <Drawer.Screen
          name="screen2"
          options={{
            drawerLabel: 'Second page Option',
            title: 'Second Stack',
          }}
          component={Screen2}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
