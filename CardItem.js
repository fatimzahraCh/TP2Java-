import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function CardItem({ title, description, image, url }) {

  const openWebsite = () => {
    console.log("Bouton cliqué, URL =", url);
    if (!url) return;

    Linking.openURL(url)
      .catch(err => console.error("Erreur Linking :", err));
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>

        <TouchableOpacity style={styles.btn} onPress={openWebsite}>
          <Text style={styles.btnText}>Visiter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  cover: { width: '100%', height: 150 },
  body: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  desc: { color: '#555', marginBottom: 10 },
  btn: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
