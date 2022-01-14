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
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import api from "../../services/api";

import styles from "./styles";

import close from "../../assets/close.png";
import check from "../../assets/check.png";
import contact from "../../assets/contact.png";

export default function Register({ navigation, route }) {
  const [selectionGroup, setSelectionGroup] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [btnSurname, setBtnSurname] = useState(false);
  const [btnCompany, setBtnCompany] = useState(false);
  const [btnEmail, setBtnEmail] = useState(false);
  const [btnAddress, setBtnAddress] = useState(false);
  const [btnGroup, setBtnGroup] = useState(false);

  const [id, setId] = useState(route.params.paramKey);
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [address, setAddress] = useState();
  const [gr, setGr] = useState();
  const [favorite, setFavorite] = useState();

  async function LoadContact() {
    await api.get(`/contacts/${id}`).then((response) => {
      setName(response.data.name);
      setNumber(response.data.number);
      setSurname(response.data.surname);
      setEmail(response.data.email);
      setCompany(response.data.company);
      setAddress(response.data.address);
      setGr(response.data.group);
      setFavorite(response.data.favorite);
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
          gr,
          favorite,
        })
        .then(
          () =>
            Alert.alert("Contato salvo", "", [
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

  function closeModal() {
    setModalVisible(!modalVisible);
  }

  function addSurname() {
    setBtnSurname(!btnSurname);
    setModalVisible(!modalVisible);
  }

  function addCompany() {
    setBtnCompany(!btnCompany);
    setModalVisible(!modalVisible);
  }

  function addEmail() {
    setBtnEmail(!btnEmail);
    setModalVisible(!modalVisible);
  }

  function addAddress() {
    setBtnAddress(!btnAddress);
    setModalVisible(!modalVisible);
  }

  function addGroup() {
    setBtnGroup(!btnGroup);
    setModalVisible(!modalVisible);
  }

  useEffect(() => {
    LoadContact();
    setSelectionGroup(gr);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={back}>
            <Image source={close} />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Novo Contato</Text>

          <TouchableOpacity onPress={Save}>
            <Image source={check} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerContact}>
          <Image source={contact} />
        </View>

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
              selectedValue={selectionGroup}
              onValueChange={(itemValue, itemIndex) => setSelectionGroup(gr)}
              value={gr}
            >
              <Picker.Item label=" " value=" " />
              <Picker.Item label="Familia" value="Familia" />
              <Picker.Item label="Amigos" value="Amigos" />
              <Picker.Item label="Trabalho" value="Trabalho" />
              <Picker.Item label="Faculdade" value="Faculdade" />
            </Picker>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
