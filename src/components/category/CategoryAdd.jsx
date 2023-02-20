import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from "react-native"
import uuid from "react-native-uuid"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { dbInsert,dropTable,dbInit } from "../../database/CategoryTable"
import { TextInput, Button } from "react-native-paper"
import ColorPicker from 'react-native-wheel-color-picker';

import dashBoard from "../../styles/Dashboard"

const CategoryAdd = props => {
  const navigation = useNavigation()
  const [task, setTask] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const [color, setColor] = useState('#ffff');
  const [colorFinal, setColorFinal] = useState('#ffff');
  const onColorChange = color => {
    setColor(color);
  };

  // Add gamelist
  const onSubmit = () => {
    if (task === "") {
      Alert.alert("Invalid", "Please enter a category", [{ text: "OK" }])
    } else {
      dbInsert(uuid.v4(), task, `${colorFinal}`)
      setTask("")
      navigation.navigate("Category")
      // refreshVal()
    }
  }
  const colourSet = () => {
    setColorFinal(color)
    setModalVisible(!modalVisible)
  }

  return (
    <View style={dashBoard.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Pick the colour</Text>
          <ColorPicker
          color={color}
          onColorChange={(color) => onColorChange(color)}
          onColorChangeComplete={color => console.log(`Color selected: ${color}`)}
          thumbSize={30}
          sliderSize={30}
          noSnap={true}
          row={false}
        />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={colourSet}>
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancle</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={dashBoard.header}>
        <Text style={dashBoard.title}>Tag</Text>
      </View>
      <View style={dashBoard.body}>
        <Text>Add a new tag</Text>
        <TextInput mode="outlined" label="Enter a tag" value={task} onChangeText={text => setTask(text)} />
        <Text>Add a tag colour</Text>
        <TouchableOpacity style={{
          backgroundColor:`${colorFinal}`,
          height: 24,
          width: 24,
          borderRadius:12,
          borderWidth:3,
        }} onPress={() => setModalVisible(true)}></TouchableOpacity>
        <View>
          <Button style={styles.btnArea} mode="contained" onPress={onSubmit}>
            Add
          </Button>
        </View>
      </View>
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
    marginTop:20
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
