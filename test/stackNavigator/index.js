import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }
//无状态组件
function HomeScreen(props) {
  //使用无状态组件时，可以直接传入props参数
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>首页</Text>
      <Button
        title="进入明细"
        onPress={() => props.navigation.navigate('Details', {id: 12})}
      />
    </View>
  );
}
function DetailScreen(props) {
  // alert(JSON.stringify(props.navigation.state.params.id));
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>明细页</Text>
      <Button
        title="回到首页"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}
//创建栈路由
const RootStack = createStackNavigator(
  //类似一个路由表
  //路线名称:组件名
  {
    Home: HomeScreen,
    Details: DetailScreen,
  },
  //自定义默认路由
  // {
  //   initialRouteName: 'Home',
  // },
);
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
