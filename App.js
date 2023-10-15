import react from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialIcons , AntDesign , MaterialCommunityIcons, FontAwesome  } from '@expo/vector-icons'

/**Pages */
import Anasayfa from './screen/Anasayfa';
import Begendiklerim from './screen/Begendiklerim';
import Populer from './screen/Populer';
import YeniEkle from './screen/YeniEkle';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Anasayfa') return <MaterialCommunityIcons name="home-flood" size={24} color="green" />;
            if (route.name === 'Begendiklerim') return <FontAwesome name="star" size={24} color="blue" />;
            if (route.name === 'Populer') return <AntDesign name="pushpin" size={24} color="black" />;
            if (route.name === 'YeniEkle') return <MaterialIcons name="add-box" size={24} color="red" />;
              
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle:{
            paddingBottom:5
          },
          tabBarLabelStyle:{
            fontSize:12
          },
          headerTitle: 'Suleyman Uygulama',
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontWeight: '600'
          },
          headerStyle:{
            backgroundColor: 'yellow'
          }
        })}
      >
        <Tab.Screen name="Anasayfa" component={Anasayfa} options={{title:'Anasayfa'}} />
        <Tab.Screen name="Begendiklerim" component={Begendiklerim} options={{title:'Begendiklerim'}} />
        <Tab.Screen name="Populer" component={Populer} options={{title:'Popüler'}} />
        <Tab.Screen name="YeniEkle" component={YeniEkle} options={{title:'Yeni Ekle'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


