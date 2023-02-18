import { Alert, View } from "react-native"
import React, { useEffect, useState } from "react"
import uuid from "react-native-uuid"
import { useNavigation } from '@react-navigation/native'

// custom imports
import form from "../styles/Form.js"
import Form from "./Form.jsx"
import TagList from "./TagList.jsx"
import { dbInsert } from "../database/sqlite"

const FormBody = props => {
  const navigation = useNavigation(); 
  const [task, setTask] = useState("")


  // Add gamelist
  const onSubmit = () => {
    if (task === "") {
      Alert.alert("Invalid", "Please enter a game", [{ text: "OK" }])
    } else {
      dbInsert(uuid.v4(), task)
      setTask("")
navigation.navigate("Category")
      // refreshVal()
    }
  }
  return (
    <View>
      <View style={form.formBody}>
        <Form value={task} setData={setTask} onSubmit={onSubmit} />
      </View>
    </View>
  )
}

export default FormBody
