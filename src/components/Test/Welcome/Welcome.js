import React,{Component} from 'react';
import {Platform,StyleSheet,View,Text,Button} from 'react-native';
import {Link} from 'react-router-native';
import I18n from '../../../i18n/i18n.js';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Welcome extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Text style={styles.welcome}>i18n↓</Text>
                    <View style={{borderWidth:1,borderColor:'#ccc'}}>
                        <Text style={styles.welcome}>
                            {I18n.t('greeting')}
                        </Text>
                    </View>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit App.js
                    </Text>
                    <Text style={styles.instructions}>
                        {instructions}
                    </Text>
                    <Link
                        to="/home"
                        underlayColor='#f0f4f7'>
                        <Text style={styles.link}>Home</Text>
                    </Link>
                    <Link
                        to="/QQCenter"
                        underlayColor='#f0f4f7'>
                        <Text style={styles.link}>游戏大厅</Text>
                    </Link>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    nav: {
        justifyContent: 'space-around'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    link:{
        fontSize:25,
        textAlign: 'center',
        color: '#333333',
        margin: 25,
        backgroundColor:'#841584',
    }
});
