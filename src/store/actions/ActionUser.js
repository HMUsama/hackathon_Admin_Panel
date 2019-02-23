export const deleteUser = (deleteInfo) =>{
    console.log("DDDDD",deleteInfo)
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        const firebase=getFirebase();
        const firestore = getFirestore();
        firestore.collection("user").doc(deleteInfo).delete()
        .then(() => {
            dispatch({ 
                type:'DELETE_USER_DETAILS_SUCCESSFUll',
                deleteInfo ,
            })
        }).catch((err) => {
            dispatch({ type:'DELETE_USER_DETAILS_ERROR',err });
        })
    }
};

export const chatUser = (message) =>{
    console.log("messages",message)
    const UserID= message.ID;
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        const firebase=getFirebase();
        const firestore = getFirestore();
        // debugger
        // firestore.collection("user").add({
        //     ...message,
        // })
        firestore.collection("user").doc(UserID)
        // .collection("messages")
        // .doc(message.AdminID)
        .add(...message)

        // firestore.collection('user').doc(UserID).collection("messages")
        // .doc(message.AdminID).add(...message)
        .then(() => {
            dispatch({ 
                type:'CHAT_SUCCESSFULL_ADD',
            })
        }).catch((err) => {
            dispatch({ type:'CHAT_ERROR',err });
        })
    }
};