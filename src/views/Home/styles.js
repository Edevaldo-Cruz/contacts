import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  search: {
    width: "90%",
    height: 45,
    backgroundColor: "#CF9F69",
    marginTop: 60,
    borderRadius: 15,
    borderColor: "#382e1e",
    borderWidth: 1.5,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    margin: 15,
  },
  allContacts: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 18,
  },
  myContacts: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
