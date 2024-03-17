import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const EmailComponent = ({email}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.emailIcon}>
        <MCIcon name="email" size={30} color="#3b2eb0" />
      </View>
      <View>
        <Text style={styles.emailName}>E-Mail</Text>
        <Text style={styles.email}>{email}</Text>
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

  emailIcon: {marginRight: 20},

  emailName: {color: 'black', fontWeight: '600'},

  email: {color: 'black'},
});

export default EmailComponent;
