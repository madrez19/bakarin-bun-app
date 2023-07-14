import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodDataByTypes } from '../../../redux/action';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#306934', height: 3 }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1
    }}
    tabStyle={{ width: 'auto' }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{
        fontFamily: 'Poppins-Medium',
        color: focused ? '#306934' : '#8D92A3',
      }}>
        {route.title}
      </Text>
    )}
  />
);


const Buns = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { buns } = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('buns'));
  }, [])
  return (
    <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
      <ScrollView>
        {buns.map((item) => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{ uri: item.picturePath }}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const Drinks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { drinks } = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('drinks'));
  }, [])
  return (
    <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
      <ScrollView>
        {drinks.map((item) => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{ uri: item.picturePath }}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { popular } = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, [])
  return (
    <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
      <ScrollView>
        {popular.map((item) => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{ uri: item.picturePath }}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const renderScene = SceneMap({
  1: Buns,
  2: Drinks,
  3: Popular,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Buns' },
    { key: '2', title: 'Drinks' },
    { key: '3', title: 'Popular' },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ backgroundColor: 'white' }}
    />

  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});