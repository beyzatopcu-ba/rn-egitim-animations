import React, { useRef, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Easing, Dimensions, LayoutAnimation } from 'react-native';

const {width} = Dimensions.get("window");
const squareWidth = width * 0.3;
const paddingHorizontal = width * 0.05;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareContainer: {
        width: width,
        height: squareWidth,
    },
    square: {
        width: squareWidth,
        height: squareWidth,
        backgroundColor: 'orange',
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: 'lightgreen',
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const LayoutAnimationExample = props => {

    const [direction, setDirection] = useState('column');

    const _onPress_LayoutHorizontal = () => {
        LayoutAnimation.configureNext({
            update: {
                duration: 500,
            }
        });
        setDirection('row');
    }

    const _onPress_LayoutVertical = () => {
        LayoutAnimation.configureNext({
            update: {
                duration: 500,
            }
        });
        setDirection('column');
    }

    return (
        <View style={[styles.container, {flexDirection: direction}]}>
            <TouchableOpacity style={styles.button} onPress={_onPress_LayoutHorizontal}>
                <Text>Yatay yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_LayoutVertical}>
                <Text>Dikey yap</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LayoutAnimationExample;
