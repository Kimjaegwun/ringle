import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './src/app/store';
import {Provider} from 'react-redux';

import Main from './src/pages/Main';
import Webinar from './src/pages/Webinar';
import WebinarDetail from './src/pages/WebinarDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Webinar" component={Webinar} />
            <Stack.Screen name="WebinarDetail" component={WebinarDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
