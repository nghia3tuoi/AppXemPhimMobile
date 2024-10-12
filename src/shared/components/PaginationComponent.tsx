import Colors from "@/src/utils/Colors";
import { TouchableOpacity, View,Text, TouchableHighlight } from "react-native";

export default function Paginationcomponent () {
    return (
        <View style={{ flexDirection:'row', gap:10, alignItems:'center', alignSelf:'center'}}>
            <TouchableHighlight underlayColor={Colors.primary} onPress={()=>{}} style={{backgroundColor:Colors.bgButton, width:35, height:35, justifyContent:'center', alignItems:'center', borderRadius:5}}><Text style={{color:Colors.textWhite}}>1</Text></TouchableHighlight>
            <TouchableHighlight underlayColor={Colors.primary} style={{backgroundColor:Colors.bgButton, width:35, height:35, justifyContent:'center', alignItems:'center', borderRadius:5}}><Text style={{color:Colors.textWhite}}>...</Text></TouchableHighlight>
            <TouchableHighlight underlayColor={Colors.primary} style={{backgroundColor:Colors.bgButton, width:35, height:35, justifyContent:'center', alignItems:'center', borderRadius:5}}><Text style={{color:Colors.textWhite}}>3</Text></TouchableHighlight>
            <TouchableHighlight underlayColor={Colors.primary} style={{backgroundColor:Colors.bgButton, width:35, height:35, justifyContent:'center', alignItems:'center', borderRadius:5}}><Text style={{color:Colors.textWhite}}>4</Text></TouchableHighlight>
            <TouchableHighlight underlayColor={Colors.primary} style={{backgroundColor:Colors.bgButton, width:35, height:35, justifyContent:'center', alignItems:'center', borderRadius:5}}><Text style={{color:Colors.textWhite}}>5</Text></TouchableHighlight>
            <TouchableHighlight underlayColor={Colors.primary} style={{backgroundColor:Colors.bgButton, width:35, height:35, justifyContent:'center', alignItems:'center', borderRadius:5}}><Text style={{color:Colors.textWhite}}>...</Text></TouchableHighlight>
            <TouchableHighlight underlayColor={Colors.primary} style={{backgroundColor:Colors.bgButton, width:35, height:35, justifyContent:'center', alignItems:'center', borderRadius:5}}><Text style={{color:Colors.textWhite}}>10</Text></TouchableHighlight>
        </View>
    )
}