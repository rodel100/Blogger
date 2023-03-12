import { useCallback, useEffect, useState, } from "react"
import { View, style, Button, Text } from "react-native";
import * as DocumentPicker from 'expo-document-picker';

export default function Blogger() {
  let [file, setFile] = useState([]);
  const documentSelector = useCallback(async () => {
    try {
      const x = await DocumentPicker.getDocumentAsync();
      setFile(x);
      console.log(file);
    }
    catch(err){
      console.log(err)
    }
  },[])
    return (
      <View >
                <Button title="log File" onPress={()=> {console.log(file)}}/>
        <Text>Input your video or mp3 file</Text>
        <Button title="Select File" onPress={documentSelector}/>
      </View>
    )
}