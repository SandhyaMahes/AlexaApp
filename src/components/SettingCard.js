import React, { Component } from "react";
import { StyleSheet,ScrollView, Text,View } from 'react-native';
import { Header,Footer, Left, Body,Right, Button,Item,Input, Icon, Title,Content,Container, List, ListItem ,Switch } from 'native-base';
import {  Card,CardItem,Thumbnail} from 'native-base';



 class SettingCard extends React.Component {
    
  
      
      render() {
       
          return (
   
       <Container>
        <Content style={{backgroundColor:'rgb(220,220,220)'}}>
         <View style={{height:30}}>
         <Text style={styles.text}>   Alexa Devices</Text>
         </View>
         <Card>
               <List >
               <ListItem>
                 
                 <Body>
                 <Text style={styles.text}> Amazon Echo </Text>
                  <Text note style={{color:'grey'}}>  Online</Text>
                  </Body>
                  <Right><Icon name='arrow-dropright'/>
                  </Right>    
                
              </ListItem>
              <ListItem>
                 
                 <Body>
                 <Text style={styles.text}> Voice Training </Text>
                   </Body>
                  <Right><Icon name='arrow-dropright'/>
                  </Right>    
                
              </ListItem>
              <ListItem>
                 
                 <Body>
                 <Text style={styles.text}> History </Text>
                 <Text note style={{color:'grey'}}>  View requests to alexa</Text>
                 
                   </Body>
                  <Right><Icon name='arrow-dropright'/>
                  </Right>    
                
              </ListItem>
              </List>
              </Card>
              <View style={{height:30}}>
              <Text style={styles.text}>   Accounts</Text>
              </View>
              <Card>
                  <List>
               <ListItem>
                 
                 <Body>
                 <Text  style={styles.text}> Notifications </Text>
                 </Body>
                 <Right><Icon name='arrow-dropright'/>
                  </Right> 
              </ListItem>

               <ListItem  style={{height:70}}> 
                 <Body>
                 <Text  style={styles.text}> Lists  </Text>
                 </Body>
                 <Right><Icon name='arrow-dropright'/>
                  </Right> 
              </ListItem>
             
               <ListItem  style={{height:70}}> 
                 <Body>
                 <Text style={styles.text}> About Amazon Alexa </Text>
                </Body>
                <Right><Icon name='arrow-dropright'/>
                  </Right> 
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
export { SettingCard };