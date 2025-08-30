import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MemberStackParamList, RootTabParamList } from './src/pages/Type'
import Member from './src/pages/member/Member'
import Profile from './src/pages/profile/Profile'
import MemberDetail from './src/pages/member/MemberDetail'
import MemberUpdate from './src/pages/member/MemberUpdate'
import ProfileEdit from './src/pages/profile/ProfileEdit'


const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack =createStackNavigator<MemberStackParamList>();

const MemberStack =()=>{
  return (
   <Stack.Navigator>
    <Stack.Screen name='MemberScreen' component={Member}/>
    <Stack.Screen name='MemberDetailScreen' component={MemberDetail}/>
    <Stack.Screen name='MemberUpdateScreen' component={MemberUpdate}/>

   </Stack.Navigator>
  )
}
  const ProfileStack =()=>{
      return(
      <Stack.Navigator>
        <Stack.Screen name='ProfileScreen' component={Profile} />
        <Stack.Screen name='ProfileEditScreen' component={ProfileEdit} /> 
     </Stack.Navigator>
     )
  }

function App() {


  return (

    <NavigationContainer>
     <Tab.Navigator>
       <Tab.Screen name='Member' component={MemberStack}/>
        <Tab.Screen name='Profile' component={ProfileStack}/>
     </Tab.Navigator>      
    </NavigationContainer>

  )
}

export default App
  
  

