import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Contact from './src/screen/Contact';
import Profile from './src/screen/Profile';

export default function App() {
const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{
            title: 'Tela inicial',
            headerStyle:{
              backgroundColor: '#f4511e'
            },
            headerTintColor :'#fff',
            headerTintStyle: {
              FontWeight:'bold',
            },
            headerTitleAlign: 'center',
            //headerShown: false
          }}/>
          <Stack.Screen name='Contato' component={Contact} options={{headerShown: false}}/>
          <Stack.Screen name='Perfil' component={Profile} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
