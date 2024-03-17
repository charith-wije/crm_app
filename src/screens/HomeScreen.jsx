import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';

const HomeScreen = ({navigation, data}) => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [dataa, setData] = useState([
  //   {
  //     id: 'ID284939',
  //     name: 'Charith Wijenayake',
  //     status: 'Active',
  //     email: 'jdurbf@gmail.com',
  //     contact_number: '0712347896',
  //     opportunities: [
  //       {
  //         name: 'Cleaning',
  //         status: 'New',
  //       },
  //       {
  //         name: 'Marketing',
  //         status: 'Closed Won',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'ID874028',
  //     name: 'Madhushi Paranagama',
  //     status: 'Inactive',
  //     email: 'kghtkfh@gmail.com',
  //     contact_number: '0715896093',
  //     opportunities: [
  //       {
  //         name: 'Cleaning',
  //         status: 'New',
  //       },
  //       {
  //         name: 'Marketing',
  //         status: 'Closed Won',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'ID184309',
  //     name: 'Soma Abeywickama',
  //     status: 'Lead',
  //     email: 'hajakrn@gmail.com',
  //     contact_number: '0714829054',
  //     opportunities: [
  //       {
  //         name: 'Cleaning',
  //         status: 'New',
  //       },
  //       {
  //         name: 'Marketing',
  //         status: 'Closed Won',
  //       },
  //     ],
  //   },
  //   // Add more items as needed
  // ]);

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
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}
        onPress={() => {
          console.log(index);
          navigation.navigate('Details', {indexx: index});
        }}>
        <View
          style={{
            width: '90%',
            height: '100%',
            borderRadius: 10,
            backgroundColor: 'white',
            alignItems: 'center',
            marginHorizontal: 15,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              marginRight: 15,
              backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 22}}>
              {getFirstLetters(item.name)}
            </Text>
          </View>
          <View>
            <Text style={{color: 'black', fontSize: 18}}>{item.name}</Text>
            <Text style={{color: 'black', fontSize: 12}}>{item.id}</Text>
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
      <View
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
          marginTop: 15,
        }}>
        <TextInput
          style={{
            height: '100%',
            width: '90%',
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 10,
            marginHorizontal: 15,
            paddingLeft: 10,
            color: '#000',
          }}
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
          placeholder="Search..."
          placeholderTextColor="grey"
        />
      </View>
      <View style={{width: '100%', height: 500}}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  data: state.mainReducer.data,
});

//export default HomeScreen;
export default connect(mapStateToProps)(HomeScreen);
