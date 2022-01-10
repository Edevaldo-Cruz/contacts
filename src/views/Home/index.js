import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import api from "../../services/api";

import styles from "./styles";
import Contacts from "../../components/contacts";

import search from "../../assets/search.png";
import allContacts from "../../assets/arrows-scroll-v.png";
import face from "../../assets/face.png";
import iconRight from "../../assets/icons-right.png";
import group from "../../assets/group.png";
import button from "../../assets/button.png";

export default function Home({ navigation }) {
  const [contactsFavorite, setContactsFavorite] = useState([]);
  const [numContacts, setNumContacts] = useState([]);
  const [content, setContent] = useState([]);

  function Add() {
    navigation.navigate("Register");
  }

  function Show(id) {
    navigation.navigate("Change", {
      paramKey: id,
    });
  }

  async function All() {
    await api.get("/contacts/filter/all/").then((response) => {
      setContent(response.data);
    });
  }

  async function Favorite() {
    await api.get("/contacts/filter/favorite/").then((response) => {
      setContactsFavorite(response.data);
    });
  }

  async function NumberContacts() {
    await api.get("/contacts/filter/all/").then((response) => {
      setNumContacts(response.data.length);
    });
  }

  useEffect(() => {
    NumberContacts();
    Favorite();
    All();
  }, [contactsFavorite]);

  return (
    <>
      <TouchableOpacity onPress={Add} style={styles.button}>
        <Image source={button} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.search}>
            <Image source={search} style={styles.image} />
            <TextInput placeholder={`${numContacts} contatos`} />
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
          {contactsFavorite.map((t) => (
            <Contacts name={t.name} onPress={() => Show(t._id)} />
          ))}
          <View style={styles.itemsOnTheLeft}>
            <Text style={styles.textRegular}>A</Text>
          </View>

          {content.map((t) => (
            <>
              <Contacts name={t.name} onPress={() => Show(t._id)} />
            </>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
