import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, Alert } from "react-native"
import uuid from "react-native-uuid"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { dbInsert, dropTable, dbInit } from "../../database/CategoryTable"
import { TextInput, Button } from "react-native-paper"
import ColorPicker from 'react-native-wheel-color-picker';

import dashBoard from "../../styles/Dashboard"

const CategoryAdd = props => {
  const navigation = useNavigation()
  const [task, setTask] = useState("")
  const [modalVisible, setModalVisible] = useState(true);
  const [color, setColor] = useState('#ffff');
  const [colorFinal, setColorFinal] = useState('#ffff');
  const onColorChange = color => {
    setColorFinal(color);
  };

  // Add gamelist
  const onSubmit = () => {
    if (task === "") {
      Alert.alert("Invalid", "Please enter a category", [{ text: "OK" }])
    } else {
      setColorFinal(color)
      dbInsert(uuid.v4(), task, `${colorFinal}`)
      setTask("")
      navigation.navigate("Category")
      // refreshVal()
    }
  }
  const onCancel = () => {
    navigation.navigate("Category")
  }

  return (
    <View style={dashBoard.container}>
      <Text style={dashBoard.title}>Add Category</Text>
      <TextInput
        mode="outlined"
        label="Category"
        value={task}
        onChangeText={text => setTask(text)}
        style={dashBoard.input}
      />

<View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ColorPicker
              onColorChange={onColorChange}
              sliderSize={20}
              sliderOneMaximumValue={255}
              sliderOneMinimumValue={0}
              sliderOneStep={1}
              sliderTwoMaximumValue={255}
              sliderTwoMinimumValue={0}
              sliderTwoStep={1}
              sliderThreeMaximumValue={255}
              sliderThreeMinimumValue={0}
              sliderThreeStep={1}
              initialColor={color}
              style={{ width: 300, height: 300 }}
            />
          </View>
        </View>
      <Button
        mode="contained"
        style={dashBoard.btnArea}
        onPress={() => onSubmit()}
      >
        <Text style={dashBoard.btnText}>Add</Text>
      </Button>

      <Button
        mode="contained"
        style={dashBoard.btnAreaCancel}
        onPress={() => onCancel()}
      >
        <Text style={dashBoard.btnText}>Cancel</Text>
      </Button>
      </View>
  )
}

export default CategoryAdd

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10
  },
  btnArea: {
    marginTop: 20,
    backgroundColor: "#F94A29"
  },
  btnAreaCancle: {
    marginTop: 20,
    backgroundColor: "#9c9c9c"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    height:385,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    alignItems: 'center',
    
  },
  buttonOpen: {
    backgroundColor: '#F94A29',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#9c9c9c',
  },
  modalText: {
    marginBottom: 1,
    textAlign: 'center',
  },
})
