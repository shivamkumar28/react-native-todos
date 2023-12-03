import { Button, View } from "react-native"
import { styles } from "./style"
import MYRCTImageView from "../../components/ImageView"

const Dashboard = () => {
    return <View style={styles.container}>
        <Button title={'Add'} />
        <MYRCTImageView />
    </View>
}

export default Dashboard