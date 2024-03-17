import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusComponent = ({status, onPrss}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subMainContainer}>
        <View style={styles.listIcon}>
          <MCIcon name="list-status" size={30} color="#3b2eb0" />
        </View>
        <View>
          <Text style={styles.status}>Status</Text>
          <Text
            style={{
              color:
                status == 'Active'
                  ? 'green'
                  : status == 'Inactive'
                  ? 'red'
                  : 'brown',
            }}>
            {status}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPrss}>
        <MCIcon name="tooltip-edit" size={35} color="#3b2eb0" />
      </TouchableOpacity>
    </View>
  );
};

export default StatusComponent;

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  subMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {marginRight: 20},
  status: {color: 'black', fontWeight: '600'},
});
