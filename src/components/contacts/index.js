import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default function Contacts({ name, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemsOnTheLeft}>
      <View style={styles.imageContact} />
      <Text style={styles.textBold}>{name}</Text>
    </TouchableOpacity>
  );
}
