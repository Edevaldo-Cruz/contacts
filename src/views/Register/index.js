import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  TouchableNativeFeedback,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles";

import close from "../../assets/close.png";
import check from "../../assets/check.png";
import contact from "../../assets/contact.png";

export default function Register({ navigation }) {
  const [selectionGroup, setSelectionGroup] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [btnSurname, setBtnSurname] = useState(false);
  const [btnCompany, setBtnCompany] = useState(false);
  const [btnEmail, setBtnEmail] = useState(false);
  const [btnAddress, setBtnAddress] = useState(false);
  const [btnGroup, setBtnGroup] = useState(false);

  function back() {
    navigation.navigate("Home");
  }

  function save() {
    Alert.alert("Contato salvo", "", [
      {},
      {
        text: "Ok",
        onPress: () => navigation.navigate("Home"),
      },
    ]);
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

  return (
    <>
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
          <TouchableOpacity onPress={save}>
            <Image source={check} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerContact}>
          <Image source={contact} />
        </View>
        <View style={styles.inputSmall}>
          <TextInput style={styles.placeholder} placeholder="Nome" />
        </View>
        {btnSurname && (
          <View style={styles.inputSmall}>
            <TextInput style={styles.placeholder} placeholder="Apelido" />
          </View>
        )}
        {btnCompany && (
          <View style={styles.inputBig}>
            <TextInput style={styles.placeholder} placeholder="Empresa" />
            <TextInput style={styles.placeholder} placeholder="Cargo" />
          </View>
        )}
        <View style={styles.inputSmall}>
          <TextInput style={styles.placeholder} placeholder="Celular" />
        </View>
        {btnEmail && (
          <View style={styles.inputSmall}>
            <TextInput style={styles.placeholder} placeholder="e-mail" />
          </View>
        )}
        {btnAddress && (
          <View style={styles.inputBig}>
            <TextInput style={styles.placeholder} placeholder="Endereço" />
          </View>
        )}
        {btnGroup && (
          <View style={styles.select}>
            <Text style={styles.textBold}>Selecione o grupo:</Text>
            <View style={styles.containerPicker}>
              <Picker
                selectedValue={selectionGroup}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectionGroup(itemValue)
                }
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

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.field}
        >
          <Text style={styles.add}>Adicionar outros campos</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
