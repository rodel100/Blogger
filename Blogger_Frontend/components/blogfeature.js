import { useCallback, useEffect, useState, } from "react"
import { View, style, Button, Text } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import { TextInput } from "react-native-web";

export default function Blogger() {
  let [file, setFile] = useState([]);
  let [title, setTitle] = useState("");
  const formData = new FormData();
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
  const submitButton = () => {
    formData.append("title", title)
    formData.append("video_file", file[0])
  }
    return (
      <View >
        <Text>{title}</Text>
        <TextInput onChangeText={(text) => setTitle(text)}></TextInput>
        <Text>Input your video or mp3 file</Text>
        <Button title="Select File" onPress={documentSelector}/>
      </View>
    )
}