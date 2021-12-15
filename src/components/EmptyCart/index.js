import React from 'react';
import FeatherIcon from "react-native-vector-icons/Feather";
import LottiView from 'lottie-react-native';
import emptyCartAnimation from '../../assets/empty-cart.json';
import {Container, EmptyCartText, EmptyCartContainer} from './styles';

export default function EmptyCart() {
    return (
        <Container>
            <EmptyCartContainer>
                <LottiView
                    source={emptyCartAnimation}
                    resizeMode={"contain"}
                    autoPlay={true}
                    loop={true}
                />
            </EmptyCartContainer>

            <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
        </Container>
    );
}
