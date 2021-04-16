import React, { useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Animated, Easing } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

const SimpleAnimation = props => {

    const squareOpacity = useRef(new Animated.Value(1)).current;

    const _onPress_Show = () => {
        let showingAnimation = Animated.timing(
            squareOpacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }
        );

        showingAnimation.start();
    }

    const _onPress_Hide = () => {
        let hidingAnimation = Animated.timing(
            squareOpacity,
            {
                toValue: 0,
                duration: 2000,
                useNativeDriver: false,
            }
        );

        hidingAnimation.start();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.square,
                { opacity: squareOpacity }
            ]} />
            <TouchableOpacity style={styles.button} onPress={_onPress_Show}>
                <Text>Göster</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_Hide}>
                <Text>Kaybet</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SimpleAnimation;
