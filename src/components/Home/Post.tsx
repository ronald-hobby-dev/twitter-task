import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {ColorSet} from '../../styles';
import {H3, Paragraph} from '..';
import {Images} from '../../constants/assets/images';
import PostLinks from '../Home/PostLinks';
import LineComponent from './Line';

interface PostComponentProps {
  index?: number | undefined;
  text?: string | undefined;
  users?: [] | undefined;
  mentions?: [] | undefined;
  authorId?: string | undefined;
}
const PostComponent: React.FC<PostComponentProps> = props => {

  const {index, text, users, authorId, mentions} = props;
  const tags = text?.split(' ').filter(v => v.startsWith('#'));
  let user = users?.find(user => user?.id === authorId);
  let userImage = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  return (
    <>
      <View style={styles.container} key={index}>
        <View style={styles.postView}>
          <View style={styles.profileView}>
            <Image
              source={{
                uri: userImage,
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.contentView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <H3>{user?.name}</H3>
                <Paragraph> @{user?.username}</Paragraph>
                <Paragraph> 1m</Paragraph>
              </View>
              <View>
                <Image style={styles.menuImg} source={Images.menu} />
              </View>
            </View>

            <View style={styles.decriptionView}>
              <Paragraph style={{lineHeight: 20}}>{text}</Paragraph>
            </View>

            {tags?.map((tag: any, index: number) => (
              <View key={index}>
                <Text style={styles.txtTag}>{tag}</Text>
              </View>
            ))}

            {mentions?.map((mention: any, index: number) => (
              <View key={index}>
                <Text style={styles.txtTag}>@{mention?.username}</Text>
              </View>
            ))}
            <PostLinks />
          </View>
        </View>
      </View>
      <LineComponent />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    borderBottomColor: ColorSet.lightGray,
    borderBottomWidth: 0.5,
    paddingBottom: 20,
    paddingTop: 15,
  },
  postView: {
    width: '100%',
    flexDirection: 'row',
  },
  profileView: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  contentView: {
    height: '100%',
    flex: 5,
  },

  decriptionView: {
    paddingTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    resizeMode: 'cover',
    borderRadius: 25,
  },
  
  tag: {
    color: 'gray',
    fontSize: 14,
    width: '40%',
  },
  threeDots: {
    height: '100%',
    width: '10%',
  },

  menuImg: {height: 20, width: 20},
  txtTag: {
    color: '#4B9AE9',
  },
});

export default PostComponent;
