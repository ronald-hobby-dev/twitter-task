import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  Image,
  View,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  Text,
} from 'react-native';

import {ColorSet, FamilySet} from '../../styles';
import {H3, H5, Paragraph} from '..';
import {Images} from '../../constants/assets/images';

interface HomeLinkComponentProps {
  onPress?: (() => void) | undefined;
  title?: string | undefined;
  iconSource?: ImageSourcePropType | null;
  iconStyle?: ImageStyle | undefined;
  containerStyle?: ViewStyle | undefined;
  textContainerStyle?: ViewStyle | undefined;
  textStyle?: TextStyle | undefined;
}

const HomeLinkComponent: React.FC<HomeLinkComponentProps> = props => {
  const {
    onPress,
    iconSource,
    title,
    iconStyle,
    containerStyle,
    textContainerStyle,
    textStyle,
  } = props;

  return (
    <View style={[styles.container]}>
      <View style={styles.row}>
        <Image style={styles.defaultIcon} source={Images.bars} />
        <Paragraph style={styles.text}>0</Paragraph>
      </View>
      <View style={styles.row}>
        <Image style={styles.defaultIcon} source={Images.comment} />
        <Paragraph style={styles.text}>0</Paragraph>
      </View>

      <View style={styles.row}>
        <Image style={styles.defaultIcon} source={Images.retweet} />
        <Paragraph style={styles.text}>0</Paragraph>
      </View>

      <View style={styles.row}>
        <Image style={styles.defaultIcon} source={Images.heart} />
        <Paragraph style={styles.text}>0</Paragraph>
      </View>

      <View style={styles.row}>
        <Image style={styles.defaultIcon} source={Images.share} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingTop:30
  },
  row:{
    flexDirection:'row',
  },
  text: {
    paddingLeft: 4,
    paddingRight:30,
    color: ColorSet.gray,
  },
  defaultIcon: {
    height: 18,
    width: 18,
    tintColor: ColorSet.gray,
  },
 
});

export default HomeLinkComponent;
