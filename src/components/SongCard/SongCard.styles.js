import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  info_container: {
    flexDirection: 'row',
    alignItems:'center',
    flex:1
  },
  artist: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
  },
  year: {
    color: 'lightgray',
    fontSize: 10,
    marginLeft: 10,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius:5
  },
  soldout_title: {
    color:'red'
  },
  content_container:{
    flexDirection:'row'
  }
});
