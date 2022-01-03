import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 75,
  },
  title: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  search: {
    width: "90%",
    height: 45,
    backgroundColor: "#CF9F69",
    marginTop: 75,
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
});

export default styles;
