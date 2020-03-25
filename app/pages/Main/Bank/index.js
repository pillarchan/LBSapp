/**
 * Bank组件---银行页面
 * 引入，创建并导出，样式
 */
//1.引入核心模块
import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
let {width, height, scale} = Dimensions.get('window');
//2.创建并导出组件
export default class Bank extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>银行页面</Text>
      </View>
    );
  }
}
//3.定义样式
const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
