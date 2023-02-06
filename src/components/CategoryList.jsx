import { Alert, View } from "react-native"
import React, { useEffect, useState } from "react"
import uuid from "react-native-uuid"

// custom imports
import form from "../styles/Form.js"
import Form from "./Form.jsx"
import TagList from "./TagList.jsx"
import { dbInsert } from "../database/sqlite"

const FormBody = ({ data, refreshVal }) => {
  const [task, setTask] = useState("")

  // Add gamelist
  const onSubmit = e => {
    if (task === "") {
      Alert.alert("Invalid", "Please enter a game", [{ text: "OK" }])
    } else {
      e.preventDefault()
      dbInsert(uuid.v4(), task)
      setTask("")
      refreshVal()
    }
  }
  return (
    <View>
      <TagList data={data} refreshVal={refreshVal} />
    </View>
  )
}

export default FormBody
