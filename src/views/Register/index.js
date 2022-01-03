import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import close from "../../assets/close.png";
import check from "../../assets/check.png";

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity>
          <Image source={close} />
        </TouchableOpacity>
        <Text style={styles.textTitle}>Novo Contato</Text>
        <TouchableOpacity>
          <Image source={check} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
