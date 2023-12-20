import { Button, View } from "react-native"
import { styles } from "./style"
import axios from 'axios';

const Dashboard = () => {

    const callPostApi = () => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((val: any) => {
                console.log('value---', val.data.data)
            })
            .catch((e: any) => {
                console.log('error-', e)
            })
    }

    const openDebugger = () => {

    }


    return <View style={styles.container}>
        <Button title={'Add'} onPress={callPostApi} />

        <Button title={'Open'} onPress={openDebugger} />
    </View>
}

export default Dashboard