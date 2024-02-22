import { Image,StyleSheet,Text,View,TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function CharacterScreen(props) {
    return (
      <View style={styles.container}>
        <View style={styles.titlebar}>
        <TouchableOpacity style={styles.backButton}>
      <Ionicons name="chevron-back-outline" size={24} color="#fff" onPress={() => props.navigation.navigate('Home')}/>
      </TouchableOpacity>
          <Text style={styles.name}>{props.route.params.text}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: props.route.params.image}} />
        </View>
        <View style={styles.content}>
          <Text style={styles.description}>{props.route.params.description}</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#010020'
    },
    imageContainer : {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    image: {
      width: 200,
      height: 200
    },
    content: {
      flex: 3,
      marginLeft: 50,
      marginRight: 50,
      alignItems: 'center'
    },
    name: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16
    },
    description: {
      color: '#fff',
      fontSize: 14
    },
    titlebar: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 40,
      paddingBottom: 10
    },
    backButton: {
        position: 'absolute',
        left: 0, 
        top: 0, 
        marginTop: 25, 
        padding: 10
      }
  });