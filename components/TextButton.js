import React from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { Text, TouchableOpacity } from 'react-native'

export default function TextButton ({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}
