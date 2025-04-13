import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Jack Hao</Text>
      <Text>MSCS</Text>
      <Text>CityU</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#ff0`,
    justifyContent: `center`,
    alignItems: `center`
  }
})