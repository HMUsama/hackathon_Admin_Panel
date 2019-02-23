export const deleteCompany = (deleteInfo) =>{
    console.log("DDDDD",deleteInfo)
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        const firebase=getFirebase();
        const firestore = getFirestore();
        firestore.collection("company").doc(deleteInfo).delete()
        .then(() => {
            dispatch({ type:'DELETE_COMPANY_DETAILS_SUCCESSFUll',deleteInfo })
        }).catch((err) => {
            dispatch({ type:'DELETE_COMPANY_DETAILS_ERROR',err });
        })
    }
};