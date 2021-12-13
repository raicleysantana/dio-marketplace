import {StatusBar} from 'expo-status-bar';
import React, {useState, useMemo} from 'react';
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

export default function Cart() {
    const [products, setProducts] = useState([
        {
            "id": "1",
            "title": "Assinatura Trimestral",
            "image_url":
                "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
            "price": 150,
            "quantity": 2,
        },

        {
            "id": "2",
            "title": "Assinatura Trimestral",
            "image_url":
                "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
            "price": 150,
            "quantity": 2,
        },

    ]);

    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products]);

    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce((accumulator, products) => {
            const totalPrice = accumulator + (products.price * products.quantity);
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
                    listFooterComponent={<View/>}
                    listFooterComponentStyle={{
                        height: 150,
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
                                        {`${item.quantity}x`}
                                    </ProductQuantity>

                                    <ProductPrice>
                                        {formatValue((item.price * item.quantity))}
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
