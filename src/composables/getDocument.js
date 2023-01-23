import { ref} from 'vue'

import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'


const getDocument = async (docRef)=> {

    //const docRef = doc(db, docTitle, docMap1);
    const document = ref(null)             
    let docSnap = await getDoc(docRef)
    if (docSnap.exists()) {              
        document.value = ({ ...docSnap.data()})            
    } else {
        // doc.data() will be undefined in this case
        console.log(docTitle + ' ' + docMap1 + ' doc does not exist');
    }


    return { document }
}

export default getDocument