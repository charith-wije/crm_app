import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

const InfoItem = ({contact_number}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.callIconView}>
        <IonIcon name="call" size={30} color="#3b2eb0" />
      </View>
      <View>
        <Text style={styles.phoneText}>Phone</Text>
        <Text style={styles.phoneNumber}>{contact_number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  callIconView: {marginRight: 20},
  phoneText: {color: 'black', fontWeight: '600'},
  phoneNumber: {color: 'black'},
});

export default InfoItem;
