import { ref} from 'vue'

import {  getDoc } from 'firebase/firestore'


const getDocument = async (docRef, listType)=> {
    const error = ref('')

    //const docRef = doc(db, docTitle, docMap1);
    const document = ref()             
    let docSnap = await getDoc(docRef)
    if (docSnap.exists()) { 
        // if(listType){            
            document.value = ({ ...docSnap.data()})  
        // }
        // else{
        //     document.value = []
        //     const snapData = {...docSnap.data()}  // new test
        //      for (const property in snapData) {
        //         document.value.push({...snapData[property]})        
        //     }
        //     console.log('list style', document.value)
        // }        
                                 
    } else {
        error.value = 'doc does not exist'        // doc.data() will be undefined in this case        
    }
    return { document, error}
}

export default getDocument