import React from "react";
import { ScrollView,StyleSheet  } from 'react-native';
import { Header,Footer, Left, Body,Right, Button,Item,Input, Icon, Title,Content,Container } from 'native-base';
import getTheme from '../../../native-base-theme/variables/material';
import {  Card,CardItem,Thumbnail} from 'native-base';
import LogContent from './LogContent';
import HomeScreenTab from '../HomeScreen/index'

 class Logs extends React.Component {
    static navigationOptions =  ({ navigation}) =>({
       
      tabBarIcon: ({ tintColor }) => (
      <Icon name="time" style={{color: tintColor}} />
    ),
     })
     render() {
        const { navigation } = this.props;  
        return  (
          <Container>   
               <Header hasTabs='true' style={{backgroundColor:'#122b3e',height:80}}>
            <Left>
            <Title style={{color: 'white',fontWeight:'bold',fontSize:26,fontFamily:'sans-serif-thin'}}>Logs </Title>
            </Left>
            <Right/>
          </Header> 
          <LogContent/>
          
        </Container>
        );
    }
    }
   
export default Logs;
