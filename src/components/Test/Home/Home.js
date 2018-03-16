import React,{Component} from 'react';
import {Text,View,StyleSheet,Button,Switch,TouchableOpacity,Image,TextInput} from 'react-native';
import Drawer from 'react-native-drawer';
import {connect} from 'react-redux';
import {IncreaseAction} from '../../../actions/actions.js';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            switchOn:true,
            message:'Welcome,Home!',
        }
    }

    toggleSwitch = ()=> {
        this.setState({
          switchOn:!this.state.switchOn
        })
    }

    clickBack = ()=>{
        this.props.history.goBack();
    }

    openDrawer = ()=>{
        this._drawer.open();
    }

    closeDrawer = ()=>{
        this._drawer.close();
    }

    render() {
        const {value,onIncreaseClick} = this.props;
        let menu = () => {
            return (
          <View style={styles.drawer}>
              <Image style={styles.image} source={require('./image.jpg')}/>
              <Text style={{fontSize:30,color:'white',marginTop:15}}>Hello,Welcome to Drawer!</Text>
              <Button title='关闭抽屉'
                      color="#ccc"
                      onPress={ ()=>{
                          this.closeDrawer()
                      }}/>
          </View>
        )};
        return (
            <Drawer
                content={menu()}
                openDrawerOffset={0.2} //打开抽屉距离右侧的距离
                panOpenMask={0.2} //左侧点击可拉动区域(响应区域)
                tapToClose={true} //点击图可关闭抽屉
                ref={drawer => this._drawer = drawer} //实现点击区域打开抽屉
            >
                <View style={styles.container}>
                    <Text style={styles.message}>
                      {this.state.switchOn?this.state.message:''}
                    </Text>
                    <Switch
                      value={this.state.switchOn}
                      onValueChange={this.toggleSwitch}
                    />
                    <Button title="Back" color="gray" onPress={this.clickBack}/>
                    <TouchableOpacity>
                        <Button title="Open the drawer!" color="pink" onPress={this.openDrawer.bind(this)}/>
                    </TouchableOpacity>
                    <View style={styles.time}>
                        <Text style={{fontSize:20}}>counter:{value}</Text>
                        <TouchableOpacity>
                            <Button title="count" onPress={onIncreaseClick}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Drawer>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        value:state.counter,
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        onIncreaseClick:() => {dispatch(IncreaseAction(2))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    showArea:{
        paddingBottom:25,
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    drawer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'dodgerblue'
    },
    image:{
        height:100,
        width:100,
        borderRadius:50
    },
    time:{
        alignItems:'center'
    }
});