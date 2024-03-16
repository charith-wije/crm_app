import {View, Text} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailedScreen = () => {
  const InfoItem = () => {
    return (
      <View
        style={{
          width: '90%',
          backgroundColor: 'white',
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 20,
        }}>
        <View style={{marginRight: 20}}>
          <IonIcon name="call" size={30} color="#3b2eb0" />
        </View>
        <View>
          <Text style={{color: 'black', fontWeight: 600}}>Phone</Text>
          <Text style={{color: 'black'}}>0719437394</Text>
        </View>
      </View>
    );
  };

  const RenderItem = () => {
    return (
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 10,
          //backgroundColor: '#c3e8e6',
          borderRadius: 10,
          padding: 5,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <View style={{flex: 6}}>
          <Text style={{color: 'black', fontWeight: 600}}>
            Status : <Text style={{color: 'green'}}>Active</Text>{' '}
          </Text>
          <Text style={{color: 'black', marginTop: 5}}>Name : Cleaning</Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
          }}>
          <MCIcon name="tooltip-edit" size={35} color="#3b2eb0" />
          <MCIcon name="delete" size={35} color="#3b2eb0" />
        </View>
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 600}}>
          Charith Wijenayake
        </Text>
        <Text style={{color: 'black'}}>ID : ID8763292</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignSelf: 'center',
          backgroundColor: 'white',
        }}>
        <InfoItem />
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 20,
          }}>
          <View style={{marginRight: 20}}>
            <MCIcon name="email" size={30} color="#3b2eb0" />
          </View>
          <View>
            <Text style={{color: 'black', fontWeight: 600}}>E-Mail</Text>
            <Text style={{color: 'black'}}>jhdgejhdhed@gmail.com</Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 20,
          }}>
          <View style={{marginRight: 20}}>
            <MCIcon name="list-status" size={30} color="#3b2eb0" />
          </View>
          <View>
            <Text style={{color: 'black', fontWeight: 600}}>Status</Text>
            <Text style={{color: 'green'}}>Active</Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            marginTop: 10,
            marginLeft: 20,
          }}>
          <Text
            style={{
              marginBottom: 10,
              color: 'black',
              fontSize: 22,
              fontWeight: 600,
            }}>
            Oppotunities
          </Text>
          <RenderItem />
          <RenderItem />
          <RenderItem />
        </View>
      </View>
    </>
  );
};

export default DetailedScreen;
