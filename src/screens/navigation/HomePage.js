import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../BottomTab/Home';
import Products from '../BottomTab/Products';
import CartPage from '../BottomTab/cart';
import LoginForm from '../BottomTab/LoginForm';
import { strings } from '../../data/Data';

const Tab = createBottomTabNavigator();

const HomePage = () => (   
  <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#fff', height: 80, borderRadius: 10, paddingBottom:10, zIndex:1,},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  marginLeft: 3,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={require('../../images/Home.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: focused ? '#e32f45' : '#748c94',
                }}>
                {strings.Home}
              </Text>
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  marginLeft: 15,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={require('../../images/Products.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: focused ? '#e32f45' : '#748c94',
                }}>
                {strings.Products}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LoginForm"
        component={LoginForm}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  marginLeft: 5,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={require('../../images/search1.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: focused ? '#e32f45' : '#748c94',
                }}>
                {strings.LoginForm}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={require('../../images/cart.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: focused ? '#e32f45' : '#748c94',
                }}>
                {strings.Cart}
              </Text>
            </View>
          ),
        }}
      />      
         
    </Tab.Navigator>

  );

  export default HomePage;