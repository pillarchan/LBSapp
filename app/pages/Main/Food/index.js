/**
 * Food组件---美食页面
 * 引入，创建并导出，样式
 */
//1.引入核心模块
import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import DiscountView from './DiscountView';
import Favorite from './Favorite';
import NavList from './NavList';
import TopBar from './TopBar';
let {width, height, scale} = Dimensions.get('window');
//2.创建并导出组件
export default class Food extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '美食',
    tabBarIcon: ({tintColor}) => {
      return (
        <Image
          style={[styles.icon, {tintColor: tintColor}]}
          source={{uri: 'food'}}
        />
      );
    },
  });
  render() {
    return (
      <View style={styles.container}>
        <TopBar />
        <NavList />
        <DiscountView />
        <Favorite />
      </View>
    );
  }
}
//3.定义样式
const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
