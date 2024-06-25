import React, {useState} from 'react';
import {View, Text, FlatList, Image, Button} from 'react-native';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {ProductItems} from '../../data/Data';
import {addToCart} from '../../redux/cartReducer';
import CustomButton from '../../components/CustomButton';

const Products = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState(ProductItems);

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 5,
          marginTop: 20,
        }}>
        <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Image
          style={{
            height: 150,
            width: 150,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
          source={item.image}
        />
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Price : ₹{item.price}
        </Text>
        <CustomButton 
          title="Add To Cart" 
          onPress={() => addItemToCart(item)}
          style={{backgroundColor:'blue'}}
          textStyle={{color:'#fff'}}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 25,
          color: '#0f0352',
          fontWeight: 'bold',
          marginHorizontal: 22,
          marginTop: 20,
          textDecorationLine: 'underline',
        }}>
        Products
      </Text>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Products;
