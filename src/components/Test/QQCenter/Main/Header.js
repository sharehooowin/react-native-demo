import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Button} from 'react-native';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            options:[
                {
                    normalText:'我的',
                },
                {
                    normalText:'大厅',

                },
                {
                    normalText:'发现',
                }
            ],
            current:0
        }
    }

    componentDidMount(){
        this.updateOptions();
    }

    back(){
        this.props.history.goBack();
    }

    async menuClick(current) {
        await this.setState({
            current:current
        });
        this.updateOptions();
    }

    updateOptions = () => {
        if(this.state.current==0)
            this.setState({
                options:[{normalText:'我的游戏'},{normalText:'大厅'},{normalText:'发现'}]
            });
        else if(this.state.current==1)
            this.setState({
                options:[{normalText:'我的'},{normalText:'游戏大厅'},{normalText:'发现'}]
            });
        else if(this.state.current==2)
            this.setState({
                options:[{normalText:'我的'},{normalText:'大厅'},{normalText:'发现福利'}]
            });
    }

    render(){
        let menu = (text,index)=>{
            return(
                <TouchableOpacity key={index} onPress = {() => {
                    this.menuClick(index)
                }}
                >
                    <View style={styles.menuItem}>
                        <Text style={{color:'white', fontSize:16}}>{text.normalText}</Text>
                    </View>
                </TouchableOpacity>
            )};
            return(
                <View style={styles.container}>
                    <View>
                        <Button title="back" onPress={()=>{this.back()}}/>
                    </View>
                    <View style={styles.menu}>
                        {this.state.options.map(menu)}
                    </View>
                </View>
            );
        }
}

let styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        backgroundColor:'dodgerblue'
    },
    menu:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    menuItem:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        height:50,
        width:80
    },
});