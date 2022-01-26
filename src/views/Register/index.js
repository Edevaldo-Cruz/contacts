import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  TouchableNativeFeedback,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import api from "../../services/api";

import styles from "./styles";

import close from "../../assets/close.png";
import check from "../../assets/check.png";
import contact from "../../assets/contact.png";

export default function Register({ navigation, route }) {
  //const [selectionGroup, setSelectionGroup] = useState();

  const [id, setId] = useState(route.params.paramKey);
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [address, setAddress] = useState();
  const [group, setGroup] = useState();
  const [favorite, setFavorite] = useState();
  const [load, setLoad] = useState(true);

  async function LoadContact() {
    await api.get(`/contacts/${id}`).then((response) => {
      setName(response.data.name);
      setNumber(response.data.number);
      setSurname(response.data.surname);
      setEmail(response.data.email);
      setCompany(response.data.company);
      setAddress(response.data.address);
      setGroup(response.data.group);
      setFavorite(response.data.favorite);
      setLoad(false);
    });
  }

  async function Save() {
    if (!number) return Alert.alert("Inclua o numero do contato.");
    if (id) {
      await api
        .put(`/contacts/${id}`, {
          name,
          surname,
          email,
          company,
          number,
          address,
          group,
          favorite,
        })
        .then(
          () =>
            Alert.alert("Contato alterado com sucesso!", "", [
              {},
              {
                text: "Ok",
              },
            ]),
          navigation.navigate("Home")
        );
    }
  }

  function back() {
    navigation.navigate("Home");
  }

  useEffect(() => {
    LoadContact().then(() => setLoad(false));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={back}>
            <Image source={close} />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Alteração do Contato</Text>

          <TouchableOpacity onPress={Save}>
            <Image source={check} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerContact}>
          <Image source={contact} />
        </View>
        {load ? (
          <ActivityIndicator
            size={100}
            color="#CF9F69"
            style={{ marginTop: 200 }}
          />
        ) : (
          <>
            <View style={styles.inputSmall}>
              <TextInput
                style={styles.placeholder}
                placeholder="Nome"
                onChangeText={(text) => setName(text)}
                value={name}
              />
            </View>
            <View style={styles.inputSmall}>
              <TextInput
                style={styles.placeholder}
                placeholder="Apelido"
                onChangeText={(text) => setSurname(text)}
                value={surname}
              />
            </View>
            <View style={styles.inputBig}>
              <TextInput
                style={styles.placeholder}
                placeholder="Empresa"
                onChangeText={(text) => setCompany(text)}
                value={company}
              />
              <TextInput style={styles.placeholder} placeholder="Cargo" />
            </View>
            <View style={styles.inputSmall}>
              <TextInput
                style={styles.placeholder}
                placeholder="Celular"
                onChangeText={(text) => setNumber(text)}
                value={number}
              />
            </View>
            <View style={styles.inputSmall}>
              <TextInput
                style={styles.placeholder}
                placeholder="e-mail"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </View>
            <View style={styles.inputBig}>
              <TextInput
                style={styles.placeholder}
                placeholder="Endereço"
                onChangeText={(text) => setAddress(text)}
                value={address}
              />
            </View>
            <View style={styles.select}>
              <Text style={styles.textBold}>Selecione o grupo:</Text>
              <View style={styles.containerPicker}>
                <Picker
                  selectedValue={group}
                  onValueChange={(itemValue) => setGroup(itemValue)}
                >
                  <Picker.Item label=" " value=" " />
                  <Picker.Item label="Familia" value="Familia" />
                  <Picker.Item label="Amigos" value="Amigos" />
                  <Picker.Item label="Trabalho" value="Trabalho" />
                  <Picker.Item label="Faculdade" value="Faculdade" />
                </Picker>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}
