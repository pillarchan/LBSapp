import React, {Component} from 'react';
/**
 * Main组件---包含4大组件的主页面
 * 引入，创建并导出，样式
 */
import {Text, View, StyleSheet, Image, CustomBadgeView} from 'react-native';
import Food from './Food';
import Hotel from './Hotel';
// import Bank from './Bank';
// import Movie from './Movie';
import TabNavigator from 'react-native-tab-navigator';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'food',
    };
  }
  render() {
    return (
      // <Food />
      <TabNavigator tabBarStyle={{height: 60}}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'food'}
          title="美食"
          renderIcon={() => (
            <Image style={styles.icon} source={{uri: 'food'}} />
          )}
          renderSelectedIcon={() => (
            <Image style={styles.icon} source={{uri: 'foodsed'}} />
          )}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'food'})}>
          <Food />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'hotel'}
          title="酒店"
          renderIcon={() => (
            <Image style={styles.icon} source={{uri: 'hotel'}} />
          )}
          renderSelectedIcon={() => (
            <Image style={styles.icon} source={{uri: 'hotelsed'}} />
          )}
          // renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({selectedTab: 'hotel'})}>
          <Hotel />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
