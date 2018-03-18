import React, { Component } from "react";
import { StyleSheet,ScrollView, Text,View } from 'react-native';
import { Header,Footer, Left, Body,Right, Button,Item,Input, Icon, Title,Content,Container, List, ListItem ,Switch } from 'native-base';
import {  Card,CardItem,Thumbnail} from 'native-base';
import {
  StackNavigator,
} from 'react-navigation';

 class LogCard1 extends React.Component {     
      render() {
       
          return (
   
       <Container>
        <Content style={{backgroundColor:'rgb(220,220,220)'}}>
        <View style={{height:30}}>
        <Text style={styles.text}>  Logs show your voice interactions with Alexa.</Text>
         </View>
         <Card>
               <List >
               <ListItem>
                 
                 <Body>
                 <Text numberOfLines={1} style={styles.text}>You: alexa who directed insidious </Text>
                 <Text numberOfLines={1} style={styles.text}>Alexa: James Wan </Text>
                 <Text note style={{color:'grey'}}>   Today at 09.40 Duration:00.05</Text>
                 </Body>
                
              </ListItem>

              
               <ListItem>
                 
                 <Body>
                 <Text numberOfLines={1} style={styles.text}>You: alexa who directed Wonder woman </Text>
                 <Text numberOfLines={1} style={styles.text}>Alexa: Patty Jenkins </Text>
                 <Text note style={{color:'grey'}}>   Today at 09.00 Duration:00.02</Text>
                 </Body>
               
              </ListItem>
               <ListItem  style={{height:70}}> 
                 <Body>
                 <Text numberOfLines={1} style={styles.text}>You: hey alexa  </Text>
                 <Text numberOfLines={1} style={styles.text}>Alexa: Hello </Text>
                 <Text note style={{color:'grey'}}>   Yesterday at 13.40 Duration:00.04</Text>
                 </Body>
               
              </ListItem>
             
               <ListItem  style={{height:70}}> 
                 <Body>
                 <Text numberOfLines={1} style={styles.text}>You: alexa when was bahubali 2 released  </Text>
                 <Text numberOfLines={1} style={styles.text}>Alexa: 28 april 2017 </Text>
                 <Text note style={{color:'grey'}}>   Yesterday at 10.40 Duration:00.07</Text>
                 </Body>
               
              </ListItem>

              
              <ListItem  style={{height:70}}> 
                 <Body>
                 <Text numberOfLines={1} style={styles.text}>You: alexa   </Text>
                 <Text numberOfLines={1} style={styles.text}>Alexa: Hello </Text>
                 <Text note style={{color:'grey'}}>   Yesterday at 01.40 Duration:00.04</Text>
                 </Body>
               
              </ListItem>

              
               </List>

         </Card>
        
 
 
       </Content>


      </Container>
);
}
}
  

const styles = StyleSheet.create({
num:{         
fontSize:15,
fontWeight:'bold'
},
text: {
fontSize:18,
alignContent:'space-around',
justifyContent: 'space-between',

},
icons:{
color:'grey'
}
});
export { LogCard1 };