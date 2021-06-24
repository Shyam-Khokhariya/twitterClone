import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Posts(props) {
  const {navigation} = props;
  const storiesList = [
    {
      uri: require('../assets/images/musicList_1.png'),
      name: 'Celeste Headlee',
      userid: 'Celeste_11',
      postText: 'What is the best taco in Los Angles?',
      commentCounts: 3,
      retweetCounts: 1,
      likeCounts: 20,
      time: '20m',
      postImage: require('../assets/images/tweets_1.jpg'),
      _id: 1,
      seen: true,
    },
    {
      uri: require('../assets/images/musicList_2.png'),
      name: 'The King of Miami',
      userid: 'The_King',
      postText: `This is exhausting. Democrats blame: 
    Russia
    Twitter
    YouTube
    Comey
    Jill Stein
    Wikileaks
    Antifa
    Millenials
      
      But the party won't look in the mirror and recognize that it has utterly failed to mount a meaningful challenge to social and economic injustice, & thus is losing support.`,
      commentCounts: 5,
      retweetCounts: 2,
      likeCounts: 9,

      time: '6h',
      _id: 2,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_3.png'),
      name: 'Cold Case Files',
      userid: 'ColdcaseFiles90',
      postText:
        'The hard truth about the United States is that the money other countries spend on health and infrastructure, we spend on war.',
      commentCounts: 10,
      retweetCounts: 15,
      likeCounts: 200,
      time: '8h',
      postImage: require('../assets/images/tweets_2.jpg'),
      _id: 3,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_1.png'),
      name: 'Virat Kholi',
      userid: 'Virat0511',
      commentCounts: 15,
      retweetCounts: 20,
      likeCounts: 20,
      time: '8h',
      postImage: require('../assets/images/tweets_5.jpg'),

      _id: 4,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_2.png'),
      name: 'King No 1',
      userid: 'KingNo1',
      postText: `On a big occasion, that was an absolute brainfade moment from our Skip... 
      Really tough time indeed... Cricket bat and ball 
      #WTC2021Final #ViratKohli`,
      commentCounts: 10,
      retweetCounts: 15,
      likeCounts: 200,
      time: '7h',
      _id: 5,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_3.png'),
      name: 'Cold Case Files',
      userid: 'ColdcaseFiles90',
      postText:
        'The hard truth about the United States is that the money other countries spend on health and infrastructure, we spend on war.',
      commentCounts: 10,
      retweetCounts: 15,
      likeCounts: 200,
      time: '8h',

      _id: 6,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_1.png'),
      name: 'Don No 1',
      userid: 'Don',
      commentCounts: 10,
      retweetCounts: 15,
      likeCounts: 200,
      time: '8h',
      postImage: require('../assets/images/tweets_4.jpg'),
      _id: 7,
      seen: false,
    },
    {
      uri: require('../assets/images/musicList_2.png'),
      name: 'Rishabh Panth',
      userid: 'panth100',
      commentCounts: 10,
      retweetCounts: 15,
      likeCounts: 200,
      time: '9h',
      postImage: require('../assets/images/tweets_3.jpg'),

      _id: 8,
      seen: true,
    },
    {
      uri: require('../assets/images/musicList_3.png'),
      name: 'Anushka Sharma Kholi',
      userid: 'Virushka',
      postText:
        'Are you an Indian cricket team fan or are you happy #WTC2021Final',
      commentCounts: 4,
      retweetCounts: 1,
      likeCounts: 30,
      time: '12h',
      postImage: require('../assets/images/tweets_5.jpg'),

      _id: 9,
      seen: true,
    },
  ];

  return (
    <View style={styles.storiesContainer}>
      <FlatList
        data={storiesList}
        renderItem={({item, index}) => {
          return (
            <View style={styles.storyItem}>
              <View style={styles.userPhoto}>
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
              </View>
              <View style={styles.userPost}>
                <View style={styles.usernameContainer}>
                  <Text style={styles.username} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={styles.userid} numberOfLines={1}>
                    {'  @'}
                    {item.userid}
                  </Text>
                  <Text style={styles.userid} numberOfLines={1}>
                    {' - '}
                    {item.time}
                  </Text>
                </View>

                <View style={styles.postContainer}>
                  {item.postText && (
                    <Text style={styles.postText}>{item.postText}</Text>
                  )}
                  {item.postImage && (
                    <Image source={item.postImage} style={styles.postImage} />
                  )}
                </View>

                <View style={styles.footerContainer}>
                  <View style={styles.footer}>
                    <MaterialCommunityIcons
                      name="comment-outline"
                      size={28}
                      color="#ababab"
                      style={styles.icon}
                    />
                    <Text style={styles.footerCounts}>
                      {item.commentCounts}
                    </Text>
                  </View>
                  <View style={styles.footer}>
                    <MaterialCommunityIcons
                      name="twitter-retweet"
                      size={28}
                      color="#ababab"
                      style={styles.icon}
                    />
                    <Text style={styles.footerCounts}>
                      {item.retweetCounts}
                    </Text>
                  </View>
                  <View style={styles.footer}>
                    <MaterialCommunityIcons
                      name="heart-outline"
                      size={28}
                      color="#ababab"
                      style={styles.icon}
                    />
                    <Text style={styles.footerCounts}>{item.likeCounts}</Text>
                  </View>
                  <View style={styles.footer}>
                    <MaterialCommunityIcons
                      name="export-variant"
                      size={25}
                      color="#ababab"
                      style={styles.icon}
                    />
                  </View>
                </View>
              </View>
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
    // flexDirection: 'row',
    // borderBottomColor: '#ababab',
    // paddingBottom: 8,
    // borderBottomWidth: 1,
  },
  storyItem: {
    marginTop: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ababab',
    flexDirection: 'row',
  },
  userPhoto: {
    flex: 1.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userPost: {
    flex: 8.2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  itemPhotoContainer: {
    height: 50,
    width: 50,
    borderRadius: 40,
    borderWidth: 4,
  },
  itemPhoto: {
    height: 40,
    width: 40,
    borderRadius: 35,
    resizeMode: 'cover',
    margin: 0.7,
  },
  usernameContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  postContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  footerContainer: {
    marginHorizontal: 10,
    marginTop: 15,
    flexDirection: 'row',
    width: Dimensions.get('screen').width * 0.82 - 70,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postText: {
    fontSize: 14,
  },
  postImage: {
    marginTop: 10,
    borderRadius: 20,
    height: 250,
    width: Dimensions.get('screen').width * 0.82 - 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerCounts: {
    marginLeft: 4,
    color: '#ababab',
  },
  userid: {
    fontSize: 16,
    color: '#ababab',
  },
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
