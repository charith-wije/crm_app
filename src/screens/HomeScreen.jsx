import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';

const HomeScreen = ({navigation, data}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getFirstLetters = sentence => {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Extract the first letter of each word
    const firstLetters = words.map(word => word.charAt(0));

    return firstLetters.join('');
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.renderItemMainContainer}
        onPress={() => {
          navigation.navigate('Details', {indexx: index});
        }}>
        <View style={styles.renderItemSubContainer1}>
          <View style={styles.renderItemSubContainer2}>
            <Text style={styles.renderItemTwoFirstLetters}>
              {getFirstLetters(item.name)}
            </Text>
          </View>
          <View>
            <Text style={styles.renderItemName}>{item.name}</Text>
            <Text style={styles.renderItemId}>{item.id}</Text>
          </View>
          <Text
            style={{
              color:
                item.status == 'Active'
                  ? 'green'
                  : item.status == 'Inactive'
                  ? 'red'
                  : 'brown',
              position: 'absolute',
              right: 10,
            }}>
            {item.status}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.mainContainerSearchBar}
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
          placeholder="Search..."
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.mainContainerFlatlist}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 15,
  },

  mainContainerSearchBar: {
    height: '100%',
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    paddingLeft: 10,
    color: '#000',
  },

  mainContainerFlatlist: {width: '100%', height: 500},

  renderItemMainContainer: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  renderItemSubContainer1: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 15,
    flexDirection: 'row',
  },

  renderItemSubContainer2: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  renderItemTwoFirstLetters: {color: 'white', fontSize: 22},

  renderItemName: {color: 'black', fontSize: 18},

  renderItemId: {color: 'black', fontSize: 12},
});

const mapStateToProps = state => ({
  data: state.mainReducer.data,
});

export default connect(mapStateToProps)(HomeScreen);
