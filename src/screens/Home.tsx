import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, RefreshControl, Image, Text} from 'react-native';
import {Loader, Post} from '../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../constants/assets/images';
import {getTweets} from '../networking/ApiService';

const Posts: React.FC<{navigation: any}> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {

    setIsLoading(true);
    const response: any = await getTweets();
    setIsLoading(false);

    if (response !== null) {
      setPosts(response?.data?.data);
      setUsers(response?.data?.includes?.users);
    }
  };

  return (
    <SafeAreaView style={[styles.safeContainer]}>
      <View style={[styles.header]}>
        <View>
          <Image style={styles.logo} source={Images.twitter} />
        </View>
      </View>

      <KeyboardAwareScrollView
        refreshControl={
          <RefreshControl
          // refreshing={isRefreshing}
          // onRefresh={onRefresh}
          />
        }
        keyboardShouldPersistTaps="always">
        {posts !== null ? (
          posts?.map((post: any, index: number) => (
            <Post index={index} text={post?.text} users={users} authorId={post?.author_id} mentions={post?.entities?.mentions} />
          ))
        ) : (
          <View>
            <Text>No feed</Text>
          </View>
        )}
      </KeyboardAwareScrollView>

      <Loader
        isLoading={isLoading}
        // shadow={false}
        layout={'outside'}
        message={'Fetching data...'}
      />
    </SafeAreaView>
  );
};

export default Posts;
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: 30,
    width: 30,
  },
});
