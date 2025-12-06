import { View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
  placeholder: string
  onPress: () => void
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full py-4 px-5'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => { }}
        placeholderTextColor="#ab85db"
        className='flex-1 ml-2 text-white'
      />

    </View>
  )
}

export default SearchBar