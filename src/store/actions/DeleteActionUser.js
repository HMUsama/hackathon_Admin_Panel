export const deleteUser = (deleteInfo) =>{
    console.log("DDDDD",deleteInfo)
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        const firebase=getFirebase();
        const firestore = getFirestore();
        firestore.collection("user").doc(deleteInfo).delete()
        .then(() => {
            dispatch({ type:'DELETE_USER_DETAILS_SUCCESSFUll',deleteInfo })
        }).catch((err) => {
            dispatch({ type:'DELETE_USER_DETAILS_ERROR',err });
        })
    }
};