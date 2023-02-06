import { useState } from "react"
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"
import form from "../styles/Form.js"

const Form = ({ value, setData, onSubmit }) => {
  return (
    <View style={form.formContainer}>
      <TextInput
        style={form.formInput}
        placeholder="Enter New Tag"
        onChangeText={e => {
          setData(e)
        }}
        value={value}
      />
      <TouchableOpacity onPress={e => onSubmit(e)} style={form.submitButton} disabled={value === "" ? true : false}>
        <Text
          style={{
            color: "white"
          }}
        >
          Add Task
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Form
