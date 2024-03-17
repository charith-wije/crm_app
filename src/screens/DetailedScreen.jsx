import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
import InfoItem from '../components/DetaiedScreenComponents/infoItem';
import EmailComponent from '../components/DetaiedScreenComponents/EmailComponent';
import StatusComponent from '../components/DetaiedScreenComponents/StatusComponent';
import OpportunityComponent from '../components/DetaiedScreenComponents/OpportunityComponent';
import UpdateModal from '../components/modals/UpdateModal';

import {
  addCustomerOpportunity,
  deleteCustomerOpportunity,
  updateCustomerOpportunity,
  updateStatusValueInCustomer,
} from '../redux/actions/actions';

const DetailedScreen = ({
  data,
  onDeleteCustomerOpportunity,
  onAddCustomerOpportunity,
  onUpdateCustomerOpportunity,
  onUpdateCustomerStatus,
}) => {
  const route = useRoute();

  const {indexx} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [opportunityName, setOpportunityName] = React.useState('');
  const [currentIndex, setCurrentIndex] = useState(null);

  const [statusClicked, setStatusClicked] = useState(null);
  const [editClicked, setEditClicked] = useState(null);
  const [plusClicked, setPlusClicked] = useState(null);

  useEffect(() => {
    console.log('');
  }, [data]);

  const RenderItem = ({item, index}) => {
    return (
      <View style={styles.renderItemMainContainer}>
        <View style={styles.renderItemSubContainer}>
          <Text style={styles.renderItemStatus}>
            Status :{' '}
            <Text
              style={{color: item.status == 'Closed Lost' ? 'red' : 'green'}}>
              {item.status}
            </Text>{' '}
          </Text>
          <Text style={{color: 'black', marginTop: 5}}>Name : {item.name}</Text>
        </View>
        <View style={styles.renderItemIconsContainer}>
          <TouchableOpacity
            onPress={() => {
              setEditClicked(true);
              setCurrentIndex(index);
              setModalVisible(true);
              setOpportunityName(item.name);
              setSelectedValue(item.status);
            }}>
            <MCIcon name="tooltip-edit" size={35} color="#3b2eb0" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onDeleteCustomerOpportunity(indexx, index);
            }}>
            <MCIcon name="delete" size={35} color="#3b2eb0" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.customerName}>
        <Text style={styles.customerNameText}>{data[indexx].name}</Text>
        <Text style={styles.customerIdText}>ID : {data[indexx].id}</Text>
      </View>
      <View style={styles.contactDetailsMainContainer}>
        <InfoItem contact_number={data[indexx].contact_number} />
        <EmailComponent email={data[indexx].email} />

        <StatusComponent
          status={data[indexx].status}
          onPrss={() => {
            setSelectedValue(data[indexx].status);
            setStatusClicked(true);
            setModalVisible(true);
          }}
        />
        <View style={styles.mainFlatlist}>
          <OpportunityComponent
            onPress={() => {
              setOpportunityName(null);
              setSelectedValue(null);
              setPlusClicked(true);
              setModalVisible(true);
            }}
          />
          <View style={styles.mainFlatlistSubContainer}>
            <FlatList
              data={data[indexx].opportunities}
              renderItem={RenderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>

      <UpdateModal
        onRequestClose={() => {
          setModalVisible(false);
        }}
        statusClicked={statusClicked}
        showDropdown={showDropdown}
        selectedValue={selectedValue}
        modalVisible={modalVisible}
        setOpen={setShowDropdown}
        setValue={setSelectedValue}
        setOpportunityName={setOpportunityName}
        opportunityName={opportunityName}
        onPressSave={() => {
          if (plusClicked) {
            if (
              selectedValue !== null &&
              selectedValue !== '' &&
              opportunityName !== null &&
              opportunityName !== ''
            ) {
              onAddCustomerOpportunity(selectedValue, opportunityName, indexx);
            }
          } else if (editClicked) {
            if (
              selectedValue !== null &&
              selectedValue !== '' &&
              opportunityName !== null &&
              opportunityName !== ''
            ) {
              onUpdateCustomerOpportunity(
                selectedValue,
                opportunityName,
                indexx,
                currentIndex,
              );
            }
          } else if (statusClicked) {
            onUpdateCustomerStatus(selectedValue, indexx);
          }
          setModalVisible(false);
          setEditClicked(null);
          setStatusClicked(null);
          setPlusClicked(null);
        }}
        onPressCancel={() => {
          setModalVisible(false);
          setEditClicked(null);
          setStatusClicked(null);
          setPlusClicked(null);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  customerName: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  customerNameText: {fontSize: 30, color: 'black', fontWeight: '600'},
  customerIdText: {color: 'black'},
  renderItemMainContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  contactDetailsMainContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  mainFlatlist: {
    width: '90%',
    marginTop: 10,
    marginLeft: 20,
    flex: 1,
  },
  mainFlatlistSubContainer: {width: '100%', height: 300},
  renderItemSubContainer: {flex: 6},
  renderItemStatus: {color: 'black', fontWeight: '600'},
  renderItemIconsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => ({
  data: state.mainReducer.data,
});

const mapDispatchToProps = {
  onDeleteCustomerOpportunity: deleteCustomerOpportunity, // Map your action creator to props
  onAddCustomerOpportunity: addCustomerOpportunity, // Map your action creator to props
  onUpdateCustomerOpportunity: updateCustomerOpportunity, // Map your action creator to props
  onUpdateCustomerStatus: updateStatusValueInCustomer, // Map your action creator to props
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedScreen);
