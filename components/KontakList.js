import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const KontakList = ({ navigation }) => {
  const kontaks = [
    { 
      id: '1', 
      name: 'Candra', 
      phone: '081234567890', 
      email: 'candra@example.com', 
      address: 'Jl. Merdeka No.1, Sukabumi', 
      image: require('../assets/candra1.jpeg')
    },
    {
      id: '2', 
      name: 'Dimas', 
      phone: '081298765432', 
      email: 'dimas@example.com', 
      address: 'Jl. Pahlawan No.2, Sukabumi', 
      image: require('../assets/dimas.jpeg') 
    },
    { 
      id: '3', 
      name: 'Ican', 
      phone: '081334455667', 
      email: 'ican@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/ican.jpeg') 
    },
     { 
      id: '4', 
      name: 'Haikal', 
      phone: '081334455667', 
      email: 'ican@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/user2.jpg') 
    },
     { 
      id: '5', 
      name: 'Agan', 
      phone: '081334455667', 
      email: 'user2@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/user2.jpg') 
    },
     { 
      id: '6', 
      name: 'Agung', 
      phone: '081334455667', 
      email: 'user2@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/user2.jpg') 
    },
     { 
      id: '7', 
      name: 'Aldy', 
      phone: '081334455667', 
      email: 'user2@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/user2.jpg') 
    },
     { 
      id: '8', 
      name: 'Herdi', 
      phone: '081334455667', 
      email: 'user2@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/user2.jpg') 
    },
     { 
      id: '9', 
      name: 'Ripal', 
      phone: '081334455667', 
      email: 'user2@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/user2.jpg') 
    },
     { 
      id: '10', 
      name: 'Garuh', 
      phone: '081334455667', 
      email: 'user2@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/user2.jpg') 
    },
    { 
      id: '11', 
      name: 'Ilham', 
      phone: '081334455667', 
      email: 'user2@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/user2.jpg') 
    },
    { 
      id: '12', 
      name: 'Fauzan', 
      phone: '081334455667', 
      email: 'user2@example.com', 
      address: 'Jl. Proklamasi No.3, Sukabumi', 
      image: require('../assets/user2.jpg') 
    },
  ];

  const renderKontakItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { kontak: item })}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail', { kontak: item })}>
          <Text style={styles.buttonText}>Lihat</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={kontaks}
      renderItem={renderKontakItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#3c59ff',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 5,
    alignSelf: 'flex-end', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default KontakList;
