import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 75,
  },
  containerTitle: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
    fontSize: 24,
    fontWeight: "bold",
  },
  containerContact: {
    width: "90%",
    alignItems: "flex-start",
  },
  image: {
    backgroundColor: "#CF9F69",
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    marginTop: 32,
    marginBottom: 16,
  },
  containerName: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#382E1E",
    marginRight: 8,
  },
  surname: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#382E1E",
    opacity: 0.5,
  },
  textSmall: {
    fontSize: 12,
    color: "#382E1E",
    marginBottom: 24,
  },
  textBold: {
    fontSize: 14,
    fontWeight: "bold",
  },
  phone: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 20,
    zIndex: 1,
  },
  footer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    top: 230,
  },
  containerFooter: {
    alignItems: "center",
    margin: 15,
  },
  centeredView: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "40%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  textModal: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
