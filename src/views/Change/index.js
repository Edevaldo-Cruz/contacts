import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import arrow from "../../assets/arrow-back.png";
import contact from "../../assets/contact.png";
import phone from "../../assets/phone.png";
import sms from "../../assets/sms.png";
import change from "../../assets/change.png";

export default function Change({ navigation }) {
  function back() {
    navigation.navigate("Home");
  }

  function edit() {
    navigation.navigate("Register");
  }

  function qrcode() {
    navigation.navigate("QRCode");
  }

  return (
    <>
      <TouchableOpacity onPress={edit} style={styles.button}>
        <Image source={change} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <TouchableOpacity onPress={back}>
            <Image source={arrow} />
          </TouchableOpacity>
          <Text style={styles.title}>Familia</Text>
        </View>
        <View style={styles.containerContact}>
          <View style={styles.image}>
            <Image source={contact} />
          </View>
          <View style={styles.containerName}>
            <Text style={styles.name}>Amor</Text>
            <Text style={styles.surname}>(Apelido)</Text>
          </View>
          <View style={styles.containerName}>
            <Text style={styles.textSmall}>Empresa X, Gerente</Text>
          </View>
          <View style={styles.phone}>
            <View style={{ flexGrow: 1 }}>
              <Text style={styles.textBold}>12 3456-7890</Text>
              <Text style={styles.textSmall}>Celular</Text>
            </View>
            <TouchableOpacity>
              <Image style={{ marginRight: 8 }} source={phone} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={sms} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textBold}>
              Rua da Meditação Porto, Portugal
            </Text>
            <Text style={styles.textSmall}>Endereço</Text>
          </View>
          <View>
            <Text style={styles.textBold}>rosana_costa@hotmail.com</Text>
            <Text style={styles.textSmall}>e-mail</Text>
          </View>
          <TouchableOpacity onPress={qrcode}>
            <Text style={styles.textBold}>Codigo QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
