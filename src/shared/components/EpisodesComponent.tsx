import Colors from "@/src/utils/Colors";
import { View, Text, TouchableOpacity } from "react-native";

export default function EpisodesComponent() {
    return (
        <View style={{padding:12,backgroundColor:Colors.bgPrimary}}>
            <Text style={{color:Colors.textWhite, fontSize:14, textTransform:'uppercase', fontWeight:'bold'}}>Danh Sách Tập</Text>
            <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:12, gap:10}}>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#404040', padding:10}}><Text style={{color:Colors.textWhite, fontWeight:500}}>Tập 1</Text></TouchableOpacity>
            </View>
        </View>
    )
}