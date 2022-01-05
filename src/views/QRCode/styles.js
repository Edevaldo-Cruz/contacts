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
  containerqr: {
    width: "90%",
    height: 480,
    backgroundColor: "#CCC",
    marginTop: 30,
    padding: 10,
    borderRadius: 15,
  },
  containerContact: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#CCC",
  },
  image: {
    backgroundColor: "#CF9F69",
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,

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
    marginLeft: 8,
    marginTop: 12,
  },
  qr: {
    alignItems: "center",
  },
  qrImage: {
    width: 281,
    height: 256,
  },
  text: {
    marginTop: 60,
    textAlign: "center",
  },
});

export default styles;
