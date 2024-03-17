import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const UpdateModal = ({
  onRequestClose,
  statusClicked,
  showDropdown,
  selectedValue,
  modalVisible,
  setOpen,
  setValue,
  setOpportunityName,
  opportunityName,
  onPressSave,
  onPressCancel,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}>
      <View style={styles.mainContainer}>
        <View
          style={[
            styles.subContainerOne,
            {height: !statusClicked ? '80%' : '50%'},
          ]}>
          {statusClicked && (
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
                setOpen={setOpen}
                setValue={setValue}
                setItems={null} // You can use setItems to dynamically change the dropdown items
              />
            </>
          )}

          {!statusClicked && (
            <>
              <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                Opportunity Status
              </Text>
              <DropDownPicker
                open={showDropdown}
                value={selectedValue}
                items={[
                  {label: 'New', value: 'New'},
                  {label: 'Closed Won', value: 'Closed Won'},
                  {label: 'Closed Lost', value: 'Closed Lost'},
                ]}
                setOpen={setOpen}
                setValue={setValue}
                setItems={null} // You can use setItems to dynamically change the dropdown items
              />
              <Text style={{color: 'black', fontSize: 20, marginTop: 10}}>
                Opportunity Name
              </Text>
              <TextInput
                style={styles.textInput}
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
            style={styles.saveButtonMainContainer}
            onPress={onPressSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButtonMainContainer}
            onPress={onPressCancel}>
            <Text style={styles.saveButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  subContainerOne: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
  saveButtonMainContainer: {
    position: 'absolute',
    bottom: 100,
    width: 200,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {color: 'white', fontSize: 20, marginBottom: 10},
  cancelButtonMainContainer: {
    position: 'absolute',
    bottom: 20,
    width: 200,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UpdateModal;
