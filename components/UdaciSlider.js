import React from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { View, Slider, StyleSheet, Text } from 'react-native'

export default function UdaciSlider ({ max, unit, step, value, onChange }) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}
