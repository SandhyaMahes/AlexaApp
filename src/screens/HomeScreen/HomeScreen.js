import React, { Component } from "react";
import { ScrollView, Text,View, TouchableOpacity } from 'react-native';
import { Header,Footer, Left, Body,Right, Button,Item,Input, Icon, Title,Content,Container } from 'native-base';
import {Logs} from '../LogScreen/Logs';
class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      text:"Tap to Speak",
      icon:{
        name: "md-mic",
      },
      buttonPressed:false }
  }

  onPress = () => {
    if(!this.state.buttonPressed)
    {
      this.setState({
      displayText:"Listening...",
      text:"Tap to stop",
      icon:{
        name:"md-radio-button-on",
        color:'red'
      },
      buttonPressed:true
    });
    }
    else
    {
      this.setState({ 
        displayText:"",
        text:"Tap to Speak",
        icon:{
          name: "md-mic",
        },
        buttonPressed:false ,
    
    });
    }
  }

  

  static navigationOptions =  ({ navigation}) =>({
      
    tabBarIcon: ({ tintColor }) => (
    <Icon name="home" style={{color: tintColor}} />
  )
   })
    render()
    {
        return(
              
                  <Container>
                  <Header hasTabs='true' style={{backgroundColor:'#122b3e',height:80}}>
                  <Left>
                  <Title style={{color: 'white',fontWeight:'bold',fontSize:26,fontFamily:'sans-serif-thin'}}>Alexa </Title>
                  </Left>
                  <Right/>
                </Header>

                <Header style={{backgroundColor:'white'}}>
    <Left>
    
        <Icon name="search" style={{color: '#122b3e'}} />
      
    </Left>
    <Body>
    <Item style={{width: 200}}>
    <Input placeholder="Search for Movies" />
  </Item>
    </Body>
    <Right/>
  </Header> 
    
        
       <Body>
          <View style={{flex:1,justifyContent:'center'}}>
        <TouchableOpacity onPress={() => this.onPress()} >
         <Text style={{paddingBottom:10,fontSize:20}}> {this.state.text}</Text>
         <Icon style={{ fontSize:70,color:'#122b3e',marginLeft: 25}} name={this.state.icon.name}/>
         <Text style={{paddingBottom:25,fontSize:25}}> {this.state.displayText}</Text>
         
        </TouchableOpacity>
         </View>
       </Body>
 
   
</Container>

        );
    }
}
export default HomeScreen;
