import React,{Component} from "react"
import {Text,Switch,TouchableOpacity,StyleSheet,View} from "react-native"
export default class Profilescreen extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            isEnabled:false,
            theme:"light"
        }
    }
    toggleswitch(){
        this.setState({
            isEnabled:this.state.isEnabled?false:true
        })
        this.setState({
            theme:this.state.isEnabled?"dark":"light"
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("./assets/logo.png")}style={styles.logoimg}/>
                <Text style={styles.username}>welcome{this.state.username}</Text>
                <View style={styles.themecontainer}>
                    <Text style={styles.themtext}> dark theme</Text>
                <Switch style={{transform:[{scaleX:1.3},{scaleY:1.3}]}}>
                    trackColor={{
                        false:"gray",
                        true:"blue"
                    }}
                    thumbColor={"orange"}
                    onValueChange={()=>this.toggleswitch()}
                    Value={this.state.isEnabled}
                    </Switch>
                </View>
                <TouchableOpacity style={styles.nextbutton}
                onPress={()=>this.props.navigation.navigate("HomeScreen")}>
                <Text style={styles.buttontext}>Next</Text>
                </TouchableOpacity>
                
                </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    logoimg:{
        width:50,
        height:50,
        marginTop:20
    },
    username:{
        color:"green",
        fontSize:30
    },
    themecontainer:{
        flex:0.2,
        flexDirection:"row",
        justifyContent:"center"
    },
    themetext:{
        color:"red"
    },
    nextbutton:{
        width:20,
        height:40,
        backgroundColor:"green",
        justifyContent:center,
        textAlign:"center"
    },
    buttontext:{
        color:"white"
    }
})