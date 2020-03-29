/**
 * TopBar组件---顶部组件
 * 引入，创建并导出，样式
 */
//1.引入核心模块
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
const {width, height, scale} = Dimensions.get('window');
//2.创建并导出组件
export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.topBar}>
        <View style={styles.cityBox}>
          <Text style={styles.cityText}>绵阳市</Text>
          <View style={styles.triangle}></View>
        </View>
        <View style={styles.search}>
          {/* <Image style={styles.icon} source={{uri: 'icon_search'}}></Image>
           */}
          <Text style={{fontFamily: 'iconfont', fontSize: 24, color: '#999'}}>
            &#xe621;
          </Text>
          <Text style={styles.searchText}>输入商品名，地点</Text>
        </View>
        <View style={styles.user}>
          <Image style={styles.icon} source={{uri: 'icon_user'}}></Image>
        </View>
      </View>
    );
  }
}
//3.定义样式
const styles = StyleSheet.create({
  topBar: {
    width,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#f33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityBox: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityText: {
    fontSize: 16,
    color: '#fff',
  },
  triangle: {
    // marginTop: 4,
    marginLeft: 2,
    borderWidth: 4,
    borderTopColor: 'transparent',
    borderRightColor: '#fff',
    borderBottomColor: '#fff',
    borderLeftColor: 'transparent',
    transform: [{rotate: '45deg'}],
  },
  search: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
  },
  searchText: {
    color: '#999',
  },
  user: {
    marginRight: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
