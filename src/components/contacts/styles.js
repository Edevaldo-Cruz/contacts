import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemsOnTheLeft: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 18,
    marginBottom: 8,
  },
  textBold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#382E1E",
  },
  imageContact: {
    backgroundColor: "#CF9F69",
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 15,
  },
});

export default styles;
