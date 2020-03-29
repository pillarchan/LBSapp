/**
 * Hotel组件---酒店页面
 * 引入，创建并导出，样式
 */
//1.引入核心模块
import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
let {width, height, scale} = Dimensions.get('window');
//2.创建并导出组件
export default class Hotel extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '酒店',
    tabBarIcon: ({tintColor}) => {
      return (
        <Image
          style={[styles.icon, {tintColor: tintColor}]}
          source={{uri: 'hotel'}}
        />
      );
    },
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>酒店页面</Text>
      </View>
    );
  }
}
//3.定义样式
const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
