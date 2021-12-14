import {StatusBar} from 'expo-status-bar';
import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, View} from 'react-native';
import {
    Container,
    Product,
    ProductTitle,
    ProductImage,
    ProductList,
    ProductPrice,
    TotalProductsText,
    ProductContainer,
    ProductPriceContainer,
    ProductSinglePrice,
    ProductTitleContainer,
    ProductQuantity,
    TotalContainer,
    TotalProductsContainer,
    ActionButtom,
    ActionContainer,
    SubTotalValue
} from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import formatValue from '../../utils/formatValue';
import EmptyCart from "../../components/EmptyCart";
import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
    const dispatch = useDispatch();
    const products = useSelector(({cart}) => cart);
    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products]);

    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce((accumulator, products) => {
            const totalPrice = accumulator + (products.price * products.amount);
            return totalPrice;
        }, 0);

        return formatValue(cartAmount);
    }, [products]);

    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<EmptyCart/>}
                    ListFooterComponent={<View/>}
                    ListFooterComponentStyle={{
                        height: 80,
                        flex: 1
                    }}
                    renderItem={({item}) => (
                        <Product>
                            <ProductImage source={{uri: item.image_url}}/>
                            <ProductTitleContainer>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPrice>
                                    {formatValue(item.price)}
                                </ProductPrice>
                                <TotalContainer>
                                    <ProductQuantity>
                                        {`${item.amount}x`}
                                    </ProductQuantity>

                                    <ProductPrice>
                                        {formatValue((item.price * item.amount))}
                                    </ProductPrice>
                                </TotalContainer>
                            </ProductTitleContainer>
                            <ActionContainer>
                                <ActionButtom onPress={() => {
                                }}>
                                    <FeatherIcon name={"plus"} size={16} color={"#e83f5b"}/>
                                </ActionButtom>

                                <ActionButtom onPress={() => {
                                }}>
                                    <FeatherIcon name={"minus"} size={16} color={"#e83f5b"}/>
                                </ActionButtom>
                            </ActionContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
            <TotalProductsContainer>
                <FeatherIcon name={"shopping-cart"} size={24} color={"#FFFFFF"}/>
                <TotalProductsText>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</TotalProductsText>
                <SubTotalValue>{cartTotal}</SubTotalValue>
            </TotalProductsContainer>
        </Container>
    );
}
