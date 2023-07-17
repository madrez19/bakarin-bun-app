import React from 'react';
import { Alert, FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../../atoms';
import { getData } from '../../../utils';

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


const InCart = () => {
  const navigation = useNavigation();
  const focused = useIsFocused()

  const storage = AsyncStorage

  const [dataCart, setDataCart] = useState([])
  const [userProfile, setUserProfile] = useState({});

  const getDataCart = async () => {
    const data = await storage.getItem("item_in_cart")

    let item = JSON.parse(data)

    setDataCart(item)

    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }

  useEffect(() => {
    getDataCart()
  }, [focused])

  const totalItem = dataCart?.reduce((acc, obj) => { return acc + obj.qty }, 0)
  const add_subtotal = dataCart?.map(x => { return { ...x, subtotal: parseFloat(x.price * x.qty) } })
  const totalPrice = add_subtotal?.reduce((acc, obj) => { return acc + obj.subtotal }, 0)

  return (
    <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
      <FlatList
        data={dataCart}
        renderItem={(({ item, index }) => {
          return (
            <ItemListFood
              isCount
              rating={3}
              image={{ uri: item?.product_picture }}
              name={item.product_name}
              type="in-progress"
              items={item.qty}
              value={item.qty}
              price={parseFloat(item.price * item.qty)}
              onPress={(val) => {
                if (val == "plus") {
                  const add_item = dataCart.map(x => {
                    if (x.id_product == item.id_product) {
                      x.qty += 1
                    }
                    return x
                  })

                  setDataCart(add_item)
                }
                else {
                  const add_item = dataCart.map(x => {
                    if (item.qty < 2) {
                      Alert.alert("Perhatian", "Produk tidak boleh kosong", [
                        {
                          text: "tidak",
                          style: 'cancel',
                        },
                        {
                          text: "Ya",
                          onPress: () => {
                            const find_data_index = dataCart.indexOf(item)

                            if (index !== -1) {
                              dataCart.splice(find_data_index, 1)
                            }

                            setDataCart(dataCart);
                          }
                        }
                      ])
                      return x
                    }
                    else {
                      if (x.id_product == item.id_product) {
                        x.qty -= 1
                      }
                      return x
                    }
                  })

                  setDataCart(add_item)
                }
              }}
            />
          )
        })}
      />
      {totalPrice > 0 &&
        <View style={{ width: '80%', marginTop: 25, alignSelf: 'center' }}>
          <Button
            text="Pesan Sekarang"
            onPress={() => {

              let pickUp = 0
              let tax = 10 / 100 * totalPrice

              const data = {
                item: add_subtotal,
                transaction: {
                  totalItem: totalItem,
                  totalPrice: totalPrice,
                  pickUp: pickUp,
                  tax: tax,
                  total: totalPrice + pickUp + tax
                },
                userProfile
              };

              console.log('data for checkout: ', data);
              navigation.navigate('OrderSummary', data);
            }}
          />
        </View>
      }
    </View>
  );
};

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        name="Choco Crunchy Bun"
        type="in-progress"
        items={3}
        price="45.000"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        name="Choco Taro Bun"
        type="in-progress"
        items={3}
        price="45.000"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy5}
        onPress={() => navigation.navigate('OrderDetail')}
        name="Mobeef Bun"
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
        date="July 10, 16:30"
        status2="Success"

      />
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        label="Matcha Latte"
        type="past-orders"
        items={3}
        price="45.000"
        date="July 10, 16:30"
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
        date="July 10, 16:30"
        status2="Success"

      />
    </View>
  );
};

const renderScene = SceneMap({
  1: InCart,
  2: InProgress,
  3: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Keranjang' },
    { key: '2', title: 'Sedang dibuat' },
    { key: '3', title: 'Pesanan selesai' },
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

const styles = StyleSheet.create({
});