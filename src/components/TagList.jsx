import React from "react"
import { View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet } from "react-native"
import form from "../styles/Form.js"

// db functions
import { dbDelete, dbDeleteAll } from "../database/sqlite.js"

const TagList = props => {
  const { data, refreshVal } = props

  // Alert dialog to confirm delete
  const AlertDialog = (title, description, onOkPressFunction) => {
    Alert.alert(
      `${title}`,
      `${description}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => onOkPressFunction() }
      ],
      { cancelable: false }
    )
  }

  // Delete single tag
  const deleteData = id => {
    AlertDialog("Delete", "Are you sure you want to delete this category?", () => {
      dbDelete(id)
        .then(() => {
          refreshVal()
        })
        .catch(err => {
          console.log("Error", err)
        })
    })
  }

  return (
    <View>
      <ScrollView style={form.view}>
        {data == "" ? (
          <Text style={form.noData}>No data available</Text>
        ) : (
          data?.map((game, index) => (
            <View style={form.listitem} key={index}>
              <View style={form.list}>
                <View style={form.listLeft}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold"
                    }}
                  >
                    {game?.game}
                  </Text>
                </View>

                <View>
                  <TouchableOpacity onPress={() => deleteData(game.id)}>
                    <Text style={form.deleteButton}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      <TouchableOpacity style={form.deleteAllDiv} onPress={() => refreshVal()}>
        <Text style={form.deleteAll}>Refresh</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TagList
