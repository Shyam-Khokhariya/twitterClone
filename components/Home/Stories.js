import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Stories(props) {
  const {navigation} = props;
  const storiesList = [
    {
      uri: require('../assets/images/musicList_1.png'),
      name: 'Celeste Headlee',
      _id: 1,
      seen: true,
    },
    {
      uri: require('../assets/images/musicList_2.png'),
      name: 'The King of Miami',
      _id: 2,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_3.png'),
      name: 'Cold Case Files',
      _id: 3,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_1.png'),
      name: 'Celeste Headlee',
      _id: 4,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_2.png'),
      name: 'The King of Miami',
      _id: 5,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_3.png'),
      name: 'Cold Case Files',
      _id: 6,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_1.png'),
      name: 'Celeste Headlee',
      _id: 7,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_2.png'),
      name: 'The King of Miami',
      _id: 8,
      seen: true,
    },
    {
      uri: require('../assets/images/musicList_3.png'),
      name: 'Cold Case Files',
      _id: 9,
      seen: true,
    },
  ];

  return (
    <View style={styles.storiesContainer}>
      <FlatList
        horizontal
        data={storiesList}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.storyItem, {marginLeft: !index ? 20 : 10}]}>
              <View style={styles.bubblesIcon}>
                <MaterialCommunityIcons
                  name="chart-bubble"
                  color={item.seen ? '#ababab' : '#1DA1F2'}
                  size={30}
                />
              </View>
              <View
                style={[
                  styles.itemPhotoContainer,
                  {borderColor: item.seen ? '#ababab' : '#1DA1F2'},
                ]}>
                <Image
                  source={item.uri}
                  style={styles.itemPhoto}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.usernameContainer}>
                <Text style={styles.username} numberOfLines={1}>
                  {item.name}
                </Text>
              </View>
              {!index && (
                <View style={styles.plusIcon}>
                  <Entypo name="circle-with-plus" color="#1DA1F2" size={25} />
                </View>
              )}
            </View>
          );
        }}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  storiesContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ababab',
    paddingBottom: 8,
    borderBottomWidth: 1,
  },
  storyItem: {
    width: 70,
    marginHorizontal: 10,
  },
  itemPhotoContainer: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 4,
  },
  itemPhoto: {
    height: 60,
    width: 60,
    borderRadius: 35,
    resizeMode: 'cover',
    margin: 0.7,
  },
  usernameContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {},
  plusIcon: {
    position: 'absolute',
    bottom: 24,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  bubblesIcon: {
    position: 'absolute',
    bottom: 18,
    left: -5,
  },
});
