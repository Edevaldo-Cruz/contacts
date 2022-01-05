import React from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "./styles";

import search from "../../assets/search.png";
import allContacts from "../../assets/arrows-scroll-v.png";
import face from "../../assets/face.png";
import iconRight from "../../assets/icons-right.png";
import group from "../../assets/group.png";
import button from "../../assets/button.png";

export default function Home({ navigation }) {
  const favorite = ["Amor", "Mãe"];
  const contacts = [
    "Cloe",
    "Lia",
    "Guilherme",
    "Henrique",
    "Michael",
    "Larissa",
    "Ágata",
    "Alessandra",
    "Bernardo",
    "Anderson",
  ];

  function Add() {
    navigation.navigate("Register");
  }

  function Contact() {
    navigation.navigate("Change");
  }

  return (
    <>
      <TouchableOpacity onPress={Add} style={styles.button}>
        <Image source={button} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.search}>
            <Image source={search} style={styles.image} />
            <TextInput placeholder={"236 contatos"} />
          </View>
          <View style={styles.itemsOnTheLeft}>
            <Text style={styles.textRegular}>Todos os Contatos</Text>
            <Image source={allContacts} style={styles.imageAllContacts} />
          </View>
          <TouchableOpacity style={styles.myContacts}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={face} style={styles.image} />
              <Text style={styles.textBold}>Seu Contato</Text>
            </View>
            <Image source={iconRight} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity style={styles.myContacts}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 18,
              }}
            >
              <Image source={group} style={styles.image} />
              <Text style={styles.textBold}>Meus grupos</Text>
            </View>
            <Image source={iconRight} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.line} />
          <View style={styles.itemsOnTheLeft}>
            <Text style={styles.textRegular}>FAVORITOS</Text>
          </View>
          {favorite.map((contact) => (
            <TouchableOpacity onPress={Contact} style={styles.itemsOnTheLeft}>
              <View style={styles.imageContact} />
              <Text style={styles.textBold}>{contact}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.itemsOnTheLeft}>
            <Text style={styles.textRegular}>A</Text>
          </View>
          {contacts.map((contact) => (
            <TouchableOpacity onPress={Contact} style={styles.itemsOnTheLeft}>
              <View style={styles.imageContact} />
              <Text style={styles.textBold}>{contact}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
