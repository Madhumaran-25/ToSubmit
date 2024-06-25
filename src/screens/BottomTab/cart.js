import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Share,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from '../../redux/cartReducer';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { strings } from '../../data/Data';

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const addedItems = cart.map(item => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
  }));
  console.log('items', addedItems);

  const Sharething = async item => {
    const message = addedItems
      .map(
        item =>
          `${item.name} - Quantity: ${item.quantity}, Price: ₹${
            item.price * item.quantity
          }`,
      )
      .join('\n');

    Share.share({
      message,
      title: 'My Order',
    })
      .then(result => console.log(result))
      .catch(error => console.error(error));
  };

  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: '#f1f1f1',
        marginVertical: 10,
        borderRadius: 5,
        padding: 10,
        marginTop: 15,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 100, width: 100, borderRadius: 5}}
          source={item.image}
        />
        <View style={{marginLeft: 15, marginTop: 5}}>
          <Text style={{color: '#000', fontSize: 15}}>{item.name}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            ₹{item.quantity * item.price}
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Quantity: {item.quantity}
          </Text>

          <Text style={{color: '#00f', fontWeight: 'bold', marginBottom: 10}}>
            In Stock
          </Text>

          <Text>*Eligible for free shipping</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 5, marginLeft: -45}}>
          <TouchableOpacity
            onPress={() => dispatch(decrementQuantity(item))}
            style={{
              width: 30,
              height: 40,
              backgroundColor: '#c0c0c0',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#000', fontSize: 25}}>-</Text>
          </TouchableOpacity>
          <TextInput
            value={item.quantity.toString()}
            style={{
              backgroundColor: '#fff',
              height: 40,
              paddingLeft: 15,
              fontSize: 15,
              fontWeight: 'bold',
            }}></TextInput>
          <TouchableOpacity
            onPress={() => dispatch(incrementQuantity(item))}
            style={{
              width: 30,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c0c0c0',
            }}>
            <Text style={{color: '#000', fontSize: 25}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          flex: 1,
          marginTop: 20,
        }}>
        <CustomButton
          title={'Remove'}
          onPress={() => dispatch(removeFromCart(item))}
          style={{height: 50}}
        />
      </View>
    </View>
  );

  const handleclearCart = () => {
    dispatch(clearCart());
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, marginHorizontal: 22}}>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {strings.Totalamount}: ₹{totalPrice}
        </Text>
        <Text
          onPress={handleclearCart}
          style={{
            color: 'blue',
            fontWeight: 'bold',
            marginLeft: 270,
            fontSize: 15,
            marginTop: -25,
          }}>
        {strings.clearCart}
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
          <Image
            style={{height: 15, width: 15, marginTop: 3}}
            source={require('../../images/greentick.png')}
          />
          <Text style={{color: 'green', fontWeight: 'bold', marginBottom: 10}}>
            {strings.freeDelivery}
          </Text>
        </View>
       
        <CustomButton 
        title={`ProceedToBuy (${totalQuantity} items)`}
        onPress={Sharething}
        style={{backgroundColor:'#FFCC00'}}
        />

        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartPage;
