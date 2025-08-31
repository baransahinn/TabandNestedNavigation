import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MemberStackParamList } from '../Type'

type Props =NativeStackScreenProps<MemberStackParamList, 'ProfileScreen'>
function Profile({navigation}:Props) {
  return (
     <SafeAreaView>
       <View>
        <Button title='Go Memmber Detail' onPress={()=>{navigation.navigate('ProfileEditScreen')}}/>
      </View>    
    </SafeAreaView>
  )
}

export default Profile