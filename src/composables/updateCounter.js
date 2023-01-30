import { db } from "@/firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref } from "vue";

const counterListRef = doc(db, 'dataCounter', 'counters')
const transerror = ref('')

// const transactionCounter = async (key, amount) =>{
//     try {
//     await runTransaction(db, async (transaction) => {
//         const sfDoc = await transaction.get(counterListRef);
//         if (!sfDoc.exists()) {
//           throw "Document does not exist!";
//         }
//         const newData = sfDoc.data()[key] + amount;
//         transaction.update(counterListRef, { [key]: newData });
//       });
//       console.log("Transaction successfully committed!");
//     } catch (e) {
//       console.log("Transaction failed: ", e);
//         transerror = e
//     }
//     return { transerror }
//   } 
const transactionCounter = async (key, amount) =>{
    try {
        let docSnap = await getDoc(counterListRef)
        if (docSnap.exists()) {  
            const newData = docSnap.data()[key] + amount;
            updateDoc(counterListRef, { [key]: newData });
        }
        else{
            console.log('no document found to increment')
        }
    } catch(e){
        console.log('addition failed', e)
    }
        return
} 


export default transactionCounter