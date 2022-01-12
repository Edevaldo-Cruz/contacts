import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";

import styles from "./styles";

import api from "../../services/api";

import arrow from "../../assets/arrow-back.png";
import contact from "../../assets/contact.png";
import phone from "../../assets/phone.png";
import sms from "../../assets/sms.png";
import heartInactive from "../../assets/heartInactive.png";
import hearActive from "../../assets/hearActive.png";
import imgEdit from "../../assets/edit.png";
import menu from "../../assets/menu-vertical.png";

export default function Change({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [id, setId] = useState(route.params.paramKey);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();
  const [gr, setGr] = useState();
  const [favorite, setFavorite] = useState();

  async function LoadContact() {
    await api.get(`/contacts/${id}`).then((response) => {
      setName(response.data.name);
      setSurname(response.data.surname);
      setEmail(response.data.email);
      setCompany(response.data.company);
      setNumber(response.data.number);
      setAddress(response.data.address);
      setGr(response.data.group);
      setFavorite(response.data.favorite);
    });
  }

  async function UpdateFavorite() {
    await api.put(`/contacts/${id}`, { favorite });
  }

  function back() {
    navigation.navigate("Home");
  }

  function qrcode() {
    navigation.navigate("QRCode");
  }

  function Show(id) {
    navigation.navigate("Register", {
      paramKey: id,
    });
  }

  useEffect(() => {
    LoadContact();
  }, []);

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
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity>
              <Text>Deletar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <TouchableOpacity onPress={back}>
            <Image source={arrow} />
          </TouchableOpacity>
          <Text style={styles.title}>{gr}</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={menu} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerContact}>
          <View style={styles.image}>
            <Image source={contact} />
          </View>
          <View style={styles.containerName}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.surname}>{surname}</Text>
          </View>
          <View style={styles.containerName}>
            <Text style={styles.textSmall}>{company}</Text>
          </View>
          <View style={styles.phone}>
            <View style={{ flexGrow: 1 }}>
              <Text style={styles.textBold}>{number}</Text>
              <Text style={styles.textSmall}>Celular</Text>
            </View>
            <TouchableOpacity>
              <Image style={{ marginRight: 8 }} source={phone} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={sms} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textBold}>{address}</Text>
            <Text style={styles.textSmall}>Endereço</Text>
          </View>
          <View>
            <Text style={styles.textBold}>{email}</Text>
            <Text style={styles.textSmall}>e-mail</Text>
          </View>
          <TouchableOpacity onPress={qrcode}>
            <Text style={styles.textBold}>Codigo QR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          {favorite ? (
            <TouchableOpacity
              onPress={() => setFavorite(!favorite)}
              value={favorite}
              style={styles.containerFooter}
              onClick={UpdateFavorite()}
            >
              <Image source={hearActive} />
              <Text>Favorito</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setFavorite(!favorite)}
              value={favorite}
              style={styles.containerFooter}
              onClick={UpdateFavorite()}
            >
              <Image source={heartInactive} />
              <Text>Favorito</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => Show(id)}
            style={styles.containerFooter}
          >
            <Image source={imgEdit} />
            <Text>Editar Contato</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
