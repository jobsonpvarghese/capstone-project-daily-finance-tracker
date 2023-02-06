import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Button, TextInput } from "react-native-paper"
import form from "../styles/Form.js"

const Form = props => {
  const { value, setData, onSubmit, navigation } = props
  return (
    // a screen to add custom tags
    <View style={styles.container}>
      <Text>Add a new tag</Text>
      <TextInput mode="outlined" label="Enter a tag" value={value} onChangeText={text => setData(text)} />
      <View>
        <Button style={styles.btnArea} mode="contained" onPress={onSubmit}>
          Add
        </Button>
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10
  },
  btnArea: {
    marginTop: 20,
    backgroundColor: "#F94A29"
  }
})
