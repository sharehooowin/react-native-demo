import React,{Component} from 'react-native';
import {StyleSheet,Button} from 'react-native';
import Header from './Header.js';

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Header/>
        );
    }
}

const styles = StyleSheet.create({
});