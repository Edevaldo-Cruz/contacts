import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 75,
  },
  search: {
    width: "90%",
    height: 45,
    backgroundColor: "#CF9F69",
    borderRadius: 15,
    borderColor: "#382e1e",
    borderWidth: 1.5,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  image: {
    margin: 15,
  },
  itemsOnTheLeft: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 18,
    marginBottom: 8,
  },
  textRegular: {
    fontSize: 12,
    color: "#382E1E",
  },
  myContacts: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textBold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#382E1E",
  },
  line: {
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#00512D",
    opacity: 0.5,
    marginTop: 14,
  },
  imageContact: {
    backgroundColor: "#CF9F69",
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 15,
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 20,
    zIndex: 1,
  },
});

export default styles;
