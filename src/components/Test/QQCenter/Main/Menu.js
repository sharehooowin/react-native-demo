import React,{Component} from 'react';
import {Image,StyleSheet,View,Text,Button} from 'react-native';

export default class Menu extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.drawer}>
                <Image style={styles.image} source={require('./image.jpg')}/>
                <Text style={{fontSize:30,color:'white',marginTop:15}}>Hello,Welcome to Drawer!</Text>
                <Button title='关闭抽屉'
                        color="#ccc"
                        onPress={ ()=>{
                            this.closeDrawer()
                        }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'dodgerblue'
    },
    image:{
        height:50,
        width:50,
        borderRadius:50
    }
});