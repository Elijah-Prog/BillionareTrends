import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewsViewer = ({navigation, route}) => {
  const {url} = route.params;
  return (

    <SafeAreaView style={{flex:1}}>
      <WebView  
      source={{uri: url}} 
      startInLoadingState
      renderLoading={()=>(
        <View style={{flex:1}}>
          <ActivityIndicator size={'large'} color={'lightskyblue'}/>
        </View>
      )}
      />
    </SafeAreaView>
  ) 
};

export default NewsViewer;

const styles = StyleSheet.create({});