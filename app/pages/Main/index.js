// import React, {Component} from 'react';
/**
 * Main组件---包含4大组件的主页面
 * 引入，创建并导出，样式
 */
// import {Text, View, StyleSheet} from 'react-native';
import Food from './Food';
import Hotel from './Hotel';
import Bank from './Bank';
import Movie from './Movie';
import {createBottomTabNavigator} from 'react-navigation';

// export default class Main extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text></Text>
//         <RootTab />
//       </View>
//     );
//   }
// }
export default createBottomTabNavigator(
  {Food, Movie, Hotel, Bank},
  {
    tabBarOptions: {
      activeTintColor: '#FD214D',
      inactiveTintColor: '#747474',
    },
  },
);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
