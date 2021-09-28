import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../containers/List';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="List"
        component={ListScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
