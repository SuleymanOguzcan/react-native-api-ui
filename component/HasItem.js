import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function HasItem() {
  return (
    <View style= {style.item}> 
        <View>
        <Text style={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec auctor odio. Phasellus rhoncus augue vel mi aliquet, vestibulum mattis augue rhoncus. Maecenas bibendum orci ut sapien efficitur malesuada. In id diam ips suscipit eu.
        </Text>
        <View style={style.itemBottom}>
            <View style= {style.itemLeft}>
               <Text style= {style.bottomText}>Kullanıcı Adı</Text> 
               <Text style= {style.bottomText}>30.11.2023</Text> 
            </View>
            <View style= {style.itemLeft}>
                <TouchableOpacity style= {style.button}>
                    <Ionicons name="md-copy-outline"  size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="heart-broken" size={24} color="black" />
                </TouchableOpacity>
            
            
            </View>
        </View>
        </View>   
    </View>
  )
}


const style = StyleSheet.create({
    item:{
       backgroundColor:'#eeeeee',
       borderColor: '#9e9e9e',
       borderWidth: 1,
       borderRadius:6,
       marginBottom:15,
       paddingHorizontal: 25,
       paddingVertical:15
    },

    text:{
        fontSize: 11,

    button:{
        marginRight:15
    }    

    },
    itemBottom:{
        borderTopColor: '#a4a2a2', 
        borderTopWidth:2,
        paddingTop:7,
        marginTop:7,   
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    bottomText:{
        fontSize: 11,
        marginRight:15
    }


  
  });

  