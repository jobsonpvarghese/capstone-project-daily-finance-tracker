import React from "react"
import { View, Text, ScrollView, TouchableOpacity, Alert,StyleSheet } from "react-native"
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

  // Delete all tags
  

  // Delete single tag


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
                  {/* Delete single tag here */}
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      {/* Delete all btn here */}
    </View>
  )
}

export default TagList
