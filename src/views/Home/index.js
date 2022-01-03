import React from "react";
import { View, TextInput, Image, Text } from "react-native";

import styles from "./styles";

import search from "../../assets/search.png";
import allContacts from "../../assets/arrows-scroll-v.png";
import face from "../../assets/face.png";
import iconRight from "../../assets/icons-right.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Image source={search} style={styles.image} />
        <TextInput placeholder={"236 contatos"} />
      </View>
      <View style={styles.allContacts}>
        <Text style={styles.allContactsText}>Todos os Contatos</Text>
        <Image source={allContacts} style={styles.imageAllContacts} />
      </View>
      <View style={styles.myContacts}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={face} style={styles.image} />
          <Text>Seu Contato</Text>
        </View>
        <Image source={iconRight} style={styles.image} />
      </View>
    </View>
  );
}
