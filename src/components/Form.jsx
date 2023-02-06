import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { Button } from "react-native-paper"
import form from "../styles/Form.js"

const Form = ({ value, setData, onSubmit }) => {
  return (
    // a screen to add custom tags
    <View style={form.container}>
      <Text style={form.title}>Add a new tag</Text>
      <TextInput style={form.input} placeholder="Enter a tag" value={value} onChangeText={text => setData(text)} />
      <Button style={form.button} mode="contained" onPress={onSubmit}>
        Add
      </Button>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 150
  },
  btnArea: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row"
  }
})
