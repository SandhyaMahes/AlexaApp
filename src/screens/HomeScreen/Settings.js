import React, { Component } from "react";
import { ScrollView, Text,View ,StyleSheet} from 'react-native';
import { Header,Footer, Left, Body,Right, Button,Item,Input, Icon, Title,Content,Container, List, ListItem ,Card,CardItem } from 'native-base';
import SettingContent from './SettingContent';
class Settings extends React.Component {
    static navigationOptions =  ({ navigation}) =>({
      
        tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" style={{color: tintColor}} />
      )
       })
    render()
    {
        const { navigation } = this.props;  
        return  (
          <Container>   
               <Header hasTabs='true' style={{backgroundColor:'#122b3e',height:80}}>
            <Left>
            <Title style={{color: 'white',fontWeight:'bold',fontSize:26,fontFamily:'sans-serif-thin'}}>Settings </Title>
            </Left>
            <Right/>
          </Header> 
          <SettingContent/>
          
        </Container>
        );
    }
}

  
export default Settings;