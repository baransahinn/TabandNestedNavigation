import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Products from './src/pages/Products'
import Favorites from './src/pages/Favorites'
import { RootStackParamList } from './src/pages/Type'

const Tab = createBottomTabNavigator<RootStackParamList>();

function App() {


  return (

    <NavigationContainer>
     <Tab.Navigator>
      <Tab.Screen name='Products' component={Products}/>
      <Tab.Screen name='Favorites' component={Favorites}/>
     </Tab.Navigator>      
    </NavigationContainer>

  )
}

export default App
  
  

