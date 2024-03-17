import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

const OpportunityComponent = ({onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Oppotunities</Text>
      <TouchableOpacity onPress={onPress}>
        <IonIcon name="add" size={40} color="#3b2eb0" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  text: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
  },
});

export default OpportunityComponent;
