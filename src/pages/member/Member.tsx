import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MemberStackParamList } from '../Type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<MemberStackParamList, 'MemberScreen'>;



function Member({navigation}:Props) {
  return (
      <SafeAreaView>
       <View>
        <Button title='Go Memmber Detail' onPress={()=>{navigation.navigate('MemberDetailScreen')}}/>
       </View>    
        </SafeAreaView>
  )
}

export default Member