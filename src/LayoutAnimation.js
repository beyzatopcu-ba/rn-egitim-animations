import React, { useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Animated, Easing, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareContainer: {
        width: width,
        height: 100,
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: 'lightgreen',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const LayoutAnimation = props => {

    const squareContainerPaddingLeft = useRef(new Animated.Value(0)).current;

    const _onPress_MoveLeft = () => {
        let moveLeftAnimation = Animated.timing(
            squareContainerPaddingLeft,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }
        );

        moveLeftAnimation.start();
    }

    const _onPress_MoveRight = () => {
        let moveRightAnimation = Animated.timing(
            squareContainerPaddingLeft,
            {
                toValue: width - 100,
                duration: 500,
                useNativeDriver: false,
            }
        );

        moveRightAnimation.start();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.squareContainer,
                { paddingLeft: squareContainerPaddingLeft }
            ]}>
                <View style={styles.square} />
            </Animated.View>
            <TouchableOpacity style={styles.button} onPress={_onPress_MoveRight}>
                <Text>Sağa kaydır</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_MoveLeft}>
                <Text>Sola kaydır</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LayoutAnimation;
