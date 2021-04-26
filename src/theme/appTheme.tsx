import { StyleSheet } from "react-native";

export const colores ={
primary: '#5856d6',
}

export const styles = StyleSheet.create({
    
  globalMargin:{
      marginHorizontal:10
  }  ,

  titulo:{
      fontSize:30,
      marginBottom: 10,
  },

  btnEspacio:{
  width:100,
  height: 100,
  backgroundColor: 'red',
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 10,
  },

  btnEspacioText:{
    fontSize: 20,
    color:'white',
  },
  avatar:{
    width: 150,
    height: 150,
    borderRadius:100,
  },
  avatarContent:{
    alignItems:'center',
    marginTop: 10,
  },
  menucontainer:{
    margin: 50,
  },

  menuboton:{
    marginVertical:10,
  },
  menuitems:{
    fontSize:25,

  },
});