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
    fontSize: 20,
    fontWeight: "bold"
  },
  deleteAll: {
    marginBottom: 20
  }
})

export default dashBoard
