import React, {useState} from 'react';
import {View} from 'react-native';
import {
    Container,
    Product,
    ProductButtom,
    ProductButtomText,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    PriceContainer,
    ProductTitle
} from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import FloatCart from '../../components/FloatingCart';
import formatValue from '../../utils/formatValue';
import FloatingCart from "../../components/FloatingCart";

export default function Catalog() {

    const [products, setProducts] = useState(
        [
            {
                "id": "1",
                "title": "Assinatura Trimestral",
                "image_url":
                    "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
                "price": 150
            },
            {
                "id": "2",
                "title": "Assinatura Anual",
                "image_url":
                    "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
                "price": 99.9
            },
            {
                "id": "3",
                "title": "Assinatura Anual",
                "image_url":
                    "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
                "price": 49.90
            },
            {
                "id": "4",
                "title": "Assinatura Anual",
                "image_url":
                    "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
                "price": 100
            },

            {
                "id": "5",
                "title": "Assinatura Anual",
                "image_url":
                    "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
                "price": 120
            },

            {
                "id": "6",
                "title": "Assinatura Anual",
                "image_url":
                    "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
                "price": 25
            }
        ]
    );
    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    listFooterComponent={<View/>}
                    listFooterComponentStyle={{
                        height: 80,
                    }}
                    renderItem={({item, index}) => (

                        <Product key={index}>
                            <ProductImage source={{uri: item.image_url}}/>
                            <ProductTitle>{item.title}</ProductTitle>
                            <PriceContainer>
                                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                                <ProductButtom onPress={() => {
                                }}>
                                    <ProductButtomText>Adicionar</ProductButtomText>
                                    <Feather size={30} name={"plus-circle"} color={"#d1d7e9"}/>
                                </ProductButtom>
                            </PriceContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
            <FloatingCart/>
        </Container>
    );
}
