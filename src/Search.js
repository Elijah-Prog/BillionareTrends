import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import {ArrowLeftIcon} from 'react-native-heroicons/solid';
  import Card from './Components/Card';
  
  const Search = ({navigation}) => {
    const [SearchText, setSearchText] = useState('');
    const [Data, setData] = useState([]);
    const searchNews = async text => {
      setSearchText(text);
      if (text.length > 2) {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=za&apiKey=65e815963ba94463a808c239f8a27639&q=${text}
          `,
        );
  
        const data = await response.json();
        console.log(data);
        setData(data.articles);
      }
    };
    return (
      <View style={styles.Search} className="flex-1">
        <View style={styles.Back} className="bg-redprimary flex-row items-center space-x-4 px-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color={'white'} size={35} />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter your query.."
            value={SearchText}
            placeholderTextColor={'white'}
            onChangeText={text => {
              searchNews(text);
            }}
            className="text-sm text-white"
          />
        </View>
  
        <View className="mb-16">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            renderItem={({item, index}) => {
              return <Card item={item} navigation={navigation} index={index} />;
            }}
          />
        </View>
      </View>
    );
  };
  
  export default Search;
  
  const styles = StyleSheet.create({

    Search:{

        paddingTop: 40
    },
    Back:{

        height: 50
    }
  });