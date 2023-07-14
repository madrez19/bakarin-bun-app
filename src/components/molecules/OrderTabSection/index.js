import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';

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


const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        label="Choco Crunchy Bun"
        type="in-progress"
        items={3}
        price="45.000"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        label="Choco Taro Bun"
        type="in-progress"
        items={3}
        price="45.000"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy5}
        onPress={() => navigation.navigate('OrderDetail')}
        label="Mobeef Bun"
        type="in-progress"
        items={3}
        price="45.000"
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        label="Choco Taro Bun"
        type="past-orders"
        items={3}
        price="45.000"
        date="Nov 25, 16:30"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        label="Matcha Latte"
        type="past-orders"
        items={3}
        price="45.000"
        date="Nov 25, 16:30"
        status="Cancel"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        label="Caramel Machiato"
        type="past-orders"
        items={3}
        price="45.000"
        date="Nov 25, 16:30"
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Sedang dibuat' },
    { key: '2', title: 'Pesanan selesai' },
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

export default OrderTabSection;

const styles = StyleSheet.create({});