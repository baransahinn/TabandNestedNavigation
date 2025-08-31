import { NavigatorScreenParams } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MemberStackParamList } from '../Type'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<MemberStackParamList , 'MemberDetailScreen'>
function MemberDetail({navigation}:Props) {
  return (
     <SafeAreaView>
            <View>
              <Button title='Go Memmber Update' onPress={()=>{navigation.navigate('MemberUpdateScreen')}} />
            </View>
        </SafeAreaView>
  )
}

export default MemberDetail