// react native dashboard styles

import { StyleSheet } from "react-native"

const dashBoard = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#DFF6FF",
    height: "100%",
    paddingBottom: 80,
    paddingTop: 80
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20
  },
  logo: {
    width: 30,
    height: 30
  },
  title: {
    fontSize: 37,
    fontWeight: "bold",
    paddingBottom: 10
  },
  deleteAll: {
    marginBottom: 20
  },
  // },
  // buttons: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   margin: 20
  // },
  // addBtn, cancelBtn: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: 50,
  //   backgroundColor: "#F94A29"
  // },
})

export default dashBoard
