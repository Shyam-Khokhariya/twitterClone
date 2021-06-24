import firestore from '@react-native-firebase/firestore';

// ... before export default statemen
export const db = firestore()

// avoid deprecated warnings
db.settings({
    timestampsInSnapshots: true
})