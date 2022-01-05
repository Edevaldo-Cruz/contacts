import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

import arrow from "../../assets/arrow-back.png";
import contact from "../../assets/contact.png";
import qr from "../../assets/qr.png";

export default function QRCode({ navigation }) {
  function back() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <TouchableOpacity onPress={back}>
          <Image source={arrow} />
        </TouchableOpacity>
        <Text style={styles.title}>QRCode</Text>
      </View>
      <View style={styles.containerqr}>
        <View style={styles.containerContact}>
          <View style={styles.image}>
            <Image source={contact} />
          </View>
          <View style={styles.containerName}>
            <Text style={styles.name}>Amor</Text>
          </View>
        </View>
        <View style={styles.qr}>
          <Image source={qr} style={styles.qrImage} />
        </View>
        <Text style={styles.text}>Digitalize o codigo QR.</Text>
      </View>
    </View>
  );
}
