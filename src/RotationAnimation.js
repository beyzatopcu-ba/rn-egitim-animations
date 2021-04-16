import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Animated, Easing, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");
const squareWidth = width * 0.3;
const paddingHorizontal = width * 0.05;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    squareContainer: {
        width: width,
        height: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        width: squareWidth,
        height: undefined,
        aspectRatio: 1,
        borderWidth: 30,
        borderRadius: 10,
        borderLeftColor: '#DE6F35',
        borderRightColor: '#0089FF',
        borderBottomColor: '#8ADE5E',
        borderTopColor: '#E874D6',

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

const RotationAnimation = props => {

    const rotation = useRef(new Animated.Value(0)).current;
    const rotationValue = useRef(0);
    
    useEffect(() => {
        const listenerId = rotation.addListener(({value}) => {
            rotationValue.current = value;
        });

        return () => {
            rotation.removeListener(listenerId);
        }
    }, []);


    const _onPress_RotateRight = () => {
        Animated.timing(
            rotation,
            {
                toValue: rotationValue.current + 1,
                duration: 500,
                useNativeDriver: false,
            }
        ).start();
    }

    const _onPress_RotateLeft = () => {
        Animated.timing(
            rotation,
            {
                toValue: rotationValue.current - 1,
                duration: 500,
                useNativeDriver: false,
            }
        ).start();
    }

    const interpolatedRotation = Animated.modulo(rotation, 9).interpolate({
        inputRange: [0, 8],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <View style={styles.container}>
            <View style={styles.squareContainer} >
                <Animated.View style={[
                    styles.square,
                    {
                        transform: [{rotate: interpolatedRotation}]
                    }
                ]} />
            </View>
            <TouchableOpacity style={styles.button} onPress={_onPress_RotateRight}>
                <Text>Sağa döndür</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_RotateLeft}>
                <Text>Sola döndür</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RotationAnimation;
