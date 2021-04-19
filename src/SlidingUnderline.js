import React, { useRef, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Dimensions, View, TouchableOpacity, Animated } from 'react-native';


const tabs = [
    {
        id: 1,
        title: 'Home',
    },
    {
        id: 2,
        title: 'News',
    },
    {
        id: 3,
        title: 'Settings'
    }
];

const {width: deviceWidth} = Dimensions.get('window');
const horizontalMargin = deviceWidth * 0.05;
const linePadding = deviceWidth * 0.07;
const lineMovableAreaWidth = (deviceWidth - 2 * horizontalMargin);
const lineWidth = lineMovableAreaWidth / tabs.length - linePadding;
const lineWidthPlusPadding = lineMovableAreaWidth / tabs.length;

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarContainer: {
        height: 70,
        width: deviceWidth,
        backgroundColor: 'orange',
        paddingHorizontal: horizontalMargin,
        justifyContent: 'center',
    },
    tabsContainer: {
        flexDirection: 'row',
        paddingVertical: deviceWidth * 0.02,
    },
    line: {
        height: 2,
        width: lineWidth,
        backgroundColor: 'white',
    },
    tab: {
        flex: 1 / (tabs.length),
        alignItems: 'center',
    },
    text: {
        fontWeight: "700",
        color: 'white',
        fontSize: deviceWidth * 0.05
    }
})

const SlidingUnderline = props => {

    const [currentText, setCurrentText] = useState('Home');

    const underlineMarginLeft = useRef(new Animated.Value(linePadding / 2)).current;

    const _onPress_Tab = index => {
        Animated.timing(
            underlineMarginLeft,
            {
                toValue: linePadding / 2 + index * lineWidthPlusPadding,
                duration: 300,
                useNativeDriver: false,
            }
        ).start(() => {
            setCurrentText(tabs[index].title);
        });
    }

    const _renderTabs = () => {
        return tabs.map((tab, index) => {
            return (
                <TouchableOpacity
                    onPress={() => _onPress_Tab(index)}
                    style={styles.tab}
                    key={tab.id}>
                    <Text style={styles.text}>{tab.title}</Text>
                </TouchableOpacity>
            )
        })
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.screen}>
                <Text>{currentText}</Text>
            </View>
            <View style={styles.tabBarContainer}>
                <View style={styles.tabsContainer}>
                    {_renderTabs()}
                </View>
                <Animated.View style={[
                    styles.line,
                    { marginLeft: underlineMarginLeft }
                ]} />
            </View>
        </SafeAreaView>
    );
};

export default SlidingUnderline;
