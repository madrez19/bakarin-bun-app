import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import ItemListMenu from '../ItemListMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({ route, focused }) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);


const Account = () => {
  const navigation = useNavigation();
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] })
    });
  }
  return (
    <View style={styles.containerAccount}>
      <ItemListMenu
        text="Edit Profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ItemListMenu text="Home Address" />
      <ItemListMenu text="Security" />
      <ItemListMenu text="Payments" />
      <ItemListMenu text="SignOut" onPress={signOut} />
    </View>
  );
};

const BakarinBun = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerBakarinBun}>
      <ItemListMenu text="Rate App" />
      <ItemListMenu text="Help Center" />
      <ItemListMenu text="Privacy & Policy" />
      <ItemListMenu text="Terms & Conditions" />
    </View>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: BakarinBun,
});

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Account' },
    { key: '2', title: 'Bakarin Bun' },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={styles.tabView}
    />

  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  tabView: { backgroundColor: 'white' },
  indicator: {
    backgroundColor: '#306934',
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1
  },
  tabStyle: { width: 'auto' },
  tabText: (focused) => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#306934' : '#8D92A3',
  }),
  containerAccount: { paddingTop: 8, paddingHorizontal: 24 },
  containerBakarinBun: { paddingTop: 8, paddingHorizontal: 24 },
});