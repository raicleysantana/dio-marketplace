import React from 'react';
import Feather from "react-native-vector-icons/Feather";
import {useNavigation} from "@react-navigation/native";
import {
    Container,
    CartButtonText,
    CartButton,
    CartPrice,
    CartTotalPrice
} from './styles';

export default function FloatingCart() {
    const navigation = useNavigation();

    return (
        <Container>
            <CartButton onPress={() => navigation.navigate("Cart")}>
                <Feather name={"shopping-cart"} size={24} color={"#f3f9ff"}/>
                <CartButtonText>2 items</CartButtonText>

                <CartPrice>
                    R$ 200,00
                </CartPrice>

                <Feather name={"chevron-right"} size={24} color={"#f3f9ff"}/>
            </CartButton>
        </Container>
    );
}
