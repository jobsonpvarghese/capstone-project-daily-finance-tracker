import { useEffect, useState } from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"
import FormBody from "../components/FormBody"
import dashBoard from "../styles/Dashboard"

// db functions
import { dbGetGames, dbInit, dropTable } from "../database/sqlite"

const CategoryAdd = props => {
  console.log(props)

  return (
    <View style={dashBoard.container}>
      <View style={dashBoard.header}>
        <Text style={dashBoard.title}>Tag</Text>
      </View>
      <View style={dashBoard.body}>
        <FormBody refreshVal={props.refreshVal} />
      </View>
    </View>
  )
}

export default CategoryAdd
