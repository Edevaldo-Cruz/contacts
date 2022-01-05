import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles";

import close from "../../assets/close.png";
import check from "../../assets/check.png";
import contact from "../../assets/contact.png";

export default function Register({ navigation }) {
  const [selectionGroup, setSelectionGroup] = useState();
  const [favorite, setFavorite] = useState();

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

  return (
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
      <View style={styles.inputSmall}>
        <TextInput style={styles.placeholder} placeholder="Apelido" />
      </View>
      <View style={styles.inputBig}>
        <TextInput style={styles.placeholder} placeholder="Empresa" />
        <TextInput style={styles.placeholder} placeholder="Cargo" />
      </View>
      <View style={styles.inputSmall}>
        <TextInput style={styles.placeholder} placeholder="Celular" />
      </View>
      <View style={styles.inputSmall}>
        <TextInput style={styles.placeholder} placeholder="e-mail" />
      </View>
      <View style={styles.inputBig}>
        <TextInput style={styles.placeholder} placeholder="Endereço" />
      </View>
      <View style={styles.select}>
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
        <Switch
          onValueChange={() => setFavorite(!favorite)}
          value={favorite}
          thumbColor={favorite ? "#00761B" : "#EE6B26"}
        />
        <Text style={styles.textBold}>Favorito</Text>
      </View>
    </View>
  );
}
