import React, { Component } from "react";
import { ScrollView, Text,View } from 'react-native';
import { Header,Footer, Left, Body,Right, Button,Item,Input, Icon, Title,Content,Container } from 'native-base';
import { TabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen.js";
import Settings from "./Settings.js";
import Logs from "../LogScreen/Logs.js";


const HomeScreenTab = TabNavigator({
    Settings: {
     screen: Settings,
    },
    Home: { 
        screen: HomeScreen,
      },
    Logs: {
      screen: Logs,
    },
    },
   
    {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
    activeTintColor: '#122b3e',
    inactiveTintColor: 'grey',
    activeBackgroundColor: "#ffffff",
    inactiveBackgroundColor: "#ffffff",
    showIcon: true,
    showLabel: false,
    indicatorStyle:{
      backgroundColor:'#122b3e',
    },
    style: {
      backgroundColor: 'white',
    },
    },
    });
export default HomeScreenTab;