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

export default function NewContact({ navigation }) {
  const [selectionGroup, setSelectionGroup] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [btnSurname, setBtnSurname] = useState(false);
  const [btnCompany, setBtnCompany] = useState(false);
  const [btnEmail, setBtnEmail] = useState(false);
  const [btnAddress, setBtnAddress] = useState(false);
  const [btnGroup, setBtnGroup] = useState(false);

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [address, setAddress] = useState();
  const [gr, setGr] = useState();
  const [favorite, setFavorite] = useState();

  async function Save() {
    if (!phone) return Alert.alert("Inclua o numero do contato.");
    await api
      .post("/contacts/", {
        name,
        phone,
        surname,
        email,
        company,
        address,
        gr,
        favorite,
      })
      .then(() =>
        Alert.alert(name, phone, surname, email, company, address, gr, favorite)
      );
    // navigation.navigate("Home"));
  }

  function back() {
    navigation.navigate("Home");
  }

  function closeModal() {
    setModalVisible(!modalVisible);
  }

  function addSurname() {
    setBtnSurname(!btnSurname);
  }

  function addCompany() {
    setBtnCompany(!btnCompany);
  }

  function addEmail() {
    setBtnEmail(!btnEmail);
  }

  function addAddress() {
    setBtnAddress(!btnAddress);
  }

  function addGroup() {
    setBtnGroup(!btnGroup);
  }

  useEffect(() => {}, []);

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableNativeFeedback onPress={closeModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Adicionar outros campos</Text>
              <TouchableOpacity onPress={addSurname} style={styles.textImage}>
                <Text style={styles.textStyle}>Apelido</Text>
                {btnSurname ? (
                  <Image source={close} />
                ) : (
                  <Image source={check} />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={addCompany} style={styles.textImage}>
                <Text style={styles.textStyle}>Empresa</Text>
                {btnCompany ? (
                  <Image source={close} />
                ) : (
                  <Image source={check} />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={addEmail} style={styles.textImage}>
                <Text style={styles.textStyle}>e-mail</Text>
                {btnEmail ? <Image source={close} /> : <Image source={check} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={addAddress} style={styles.textImage}>
                <Text style={styles.textStyle}>Endereço</Text>
                {btnAddress ? (
                  <Image source={close} />
                ) : (
                  <Image source={check} />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={addGroup} style={styles.textImage}>
                <Text style={styles.textStyle}>Grupos</Text>
                {btnGroup ? <Image source={close} /> : <Image source={check} />}
              </TouchableOpacity>

              <View style={styles.containerBtn}>
                <TouchableOpacity onPress={closeModal} style={styles.button}>
                  <Text style={styles.textBtn}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </Modal>

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

        {btnSurname && (
          <View style={styles.inputSmall}>
            <TextInput
              style={styles.placeholder}
              placeholder="Apelido"
              onChangeText={(text) => setSurname(text)}
              value={surname}
            />
          </View>
        )}
        {btnCompany && (
          <View style={styles.inputBig}>
            <TextInput
              style={styles.placeholder}
              placeholder="Empresa"
              onChangeText={(text) => setCompany(text)}
              value={company}
            />
            <TextInput style={styles.placeholder} placeholder="Cargo" />
          </View>
        )}
        <View style={styles.inputSmall}>
          <TextInput
            style={styles.placeholder}
            placeholder="Celular"
            onChangeText={(number) => setPhone(number)}
            keyboardType="numeric"
            value={phone}
          />
        </View>
        {btnEmail && (
          <View style={styles.inputSmall}>
            <TextInput
              style={styles.placeholder}
              placeholder="e-mail"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
        )}
        {btnAddress && (
          <View style={styles.inputBig}>
            <TextInput
              style={styles.placeholder}
              placeholder="Endereço"
              onChangeText={(text) => setAddress(text)}
              value={address}
            />
          </View>
        )}
        {btnGroup && (
          <View style={styles.select}>
            <Text style={styles.textBold}>Selecione o grupo:</Text>
            <View style={styles.containerPicker}>
              <Picker
                selectedValue={selectionGroup}
                onValueChange={(itemValue, itemIndex) => setSelectionGroup(gr)}
                placeholder="Selecione o Grupo"
              >
                <Picker.Item label=" " value=" " />
                <Picker.Item label="Familia" value="Familia" />
                <Picker.Item label="Amigos" value="Amigos" />
                <Picker.Item label="Trabalho" value="Trabalho" />
                <Picker.Item label="Faculdade" value="Faculdade" />
              </Picker>
            </View>
          </View>
        )}
        {!id && (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.field}
          >
            <Text style={styles.add}>Adicionar outros campos</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}
