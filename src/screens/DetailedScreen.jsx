import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';

import {
  addCustomerOpportunity,
  deleteCustomerOpportunity,
} from '../redux/actions/actions';

const DetailedScreen = ({
  data,
  onDeleteCustomerOpportunity,
  onAddCustomerOpportunity,
}) => {
  const route = useRoute();

  const {indexx} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [opportunityName, setOpportunityName] = React.useState('');

  useEffect(() => {
    console.log('');
  }, [data]);

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
          <Text style={{color: 'black'}}>{data[indexx].contact_number}</Text>
        </View>
      </View>
    );
  };

  const RenderItem = ({item, index}) => {
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
            Status :{' '}
            <Text
              style={{color: item.status == 'Closed Lost' ? 'red' : 'green'}}>
              {item.status}
            </Text>{' '}
          </Text>
          <Text style={{color: 'black', marginTop: 5}}>Name : {item.name}</Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
          }}>
          <MCIcon name="tooltip-edit" size={35} color="#3b2eb0" />
          <TouchableOpacity
            onPress={() => {
              //console.log(0, index);
              onDeleteCustomerOpportunity(indexx, index);
            }}>
            <MCIcon name="delete" size={35} color="#3b2eb0" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 600}}>
          {data[indexx].name}
        </Text>
        <Text style={{color: 'black'}}>ID : {data[indexx].id}</Text>
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
            <Text style={{color: 'black'}}>{data[indexx].email}</Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingVertical: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{marginRight: 20}}>
              <MCIcon name="list-status" size={30} color="#3b2eb0" />
            </View>
            <View>
              <Text style={{color: 'black', fontWeight: 600}}>Status</Text>
              <Text
                style={{
                  color:
                    data[indexx].status == 'Active'
                      ? 'green'
                      : data[indexx].status == 'Inactive'
                      ? 'red'
                      : 'brown',
                }}>
                {data[indexx].status}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log(indexx);
              setModalVisible(true);
            }}>
            <MCIcon name="tooltip-edit" size={35} color="#3b2eb0" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '90%',
            marginTop: 10,
            marginLeft: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 22,
                fontWeight: 600,
              }}>
              Oppotunities
            </Text>
            <TouchableOpacity
              //style={{marginRight: 20}}
              onPress={() => setModalVisible(true)}>
              <IonIcon name="add" size={40} color="#3b2eb0" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data[indexx].opportunities}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              width: '90%',
              height: '90%',
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            {false && (
              <>
                <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                  Customer Status
                </Text>
                <DropDownPicker
                  open={showDropdown}
                  value={selectedValue}
                  items={[
                    {label: 'Active', value: 'Active'},
                    {label: 'Inactive', value: 'Inactive'},
                    {label: 'Lead', value: 'Lead'},
                  ]}
                  setOpen={setShowDropdown}
                  setValue={setSelectedValue}
                  setItems={null} // You can use setItems to dynamically change the dropdown items
                />
              </>
            )}

            {true && (
              <>
                <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                  Opportunity Status
                </Text>
                <DropDownPicker
                  open={showDropdown}
                  value={selectedValue}
                  items={[
                    {label: 'Active', value: 'Active'},
                    {label: 'Inactive', value: 'Inactive'},
                    {label: 'Lead', value: 'Lead'},
                  ]}
                  setOpen={setShowDropdown}
                  setValue={setSelectedValue}
                  setItems={null} // You can use setItems to dynamically change the dropdown items
                />
                <Text style={{color: 'black', fontSize: 20, marginTop: 10}}>
                  Opportunity Name
                </Text>
                <TextInput
                  style={{
                    //height: 40,
                    width: '100%',
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    color: 'black',
                  }}
                  multiline={true}
                  onChangeText={setOpportunityName}
                  value={opportunityName}
                  placeholder="Add the opportunity..."
                  placeholderTextColor="grey"
                  keyboardType="default"
                />
              </>
            )}
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 20,
                width: 200,
                height: 60,
                borderRadius: 20,
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                onAddCustomerOpportunity(
                  selectedValue,
                  opportunityName,
                  indexx,
                );
                setModalVisible(false);
              }}>
              <Text style={{color: 'white', fontSize: 20, marginBottom: 10}}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => ({
  data: state.mainReducer.data,
});

const mapDispatchToProps = {
  onDeleteCustomerOpportunity: deleteCustomerOpportunity, // Map your action creator to props
  onAddCustomerOpportunity: addCustomerOpportunity, // Map your action creator to props
};
//const appOppotunity = {

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  //appOppotunity,
)(DetailedScreen);
