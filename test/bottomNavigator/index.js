import React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: '美食',
    tabBarIcon: ({tintColor}) => {
      return (
        <Image
          style={[{width: 20, height: 20}, {tintColor: tintColor}]}
          source={{uri: 'food'}}
        />
      );
    },
  });
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>美食</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: '电影',
    tabBarIcon: ({tintColor}) => {
      return (
        <Image
          style={[{width: 20, height: 20}, {tintColor: tintColor}]}
          source={{uri: 'movie'}}
        />
      );
    },
  });
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>电影</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);
