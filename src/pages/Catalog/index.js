import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';
import {
    Container,
    Product,
    ProductButton,
    ProductButtonText,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    PriceContainer,
    ProductTitle
} from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';
import FloatingCart from "../../components/FloatingCart";
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

export default function Catalog() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const {data} = await api.get('/products');
            setProducts(data);
        }

        loadProducts();
    }, []);

    function handleAddToCart(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={<View/>}
                    ListFooterComponentStyle={{
                        height: 40,
                    }}
                    renderItem={({item, index}) => (

                        <Product key={index}>
                            <ProductImage source={{uri: item.image_url}}/>
                            <ProductTitle>{item.title}</ProductTitle>
                            <PriceContainer>
                                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                                <ProductButton onPress={() => handleAddToCart(item.id)}>
                                    <ProductButtonText>Adicionar</ProductButtonText>
                                    <Feather size={30} name={"plus-circle"} color={"#d1d7e9"}/>
                                </ProductButton>
                            </PriceContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
            <FloatingCart/>
        </Container>
    );
}
