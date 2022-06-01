//we will be adding our db queries and functions
import { db } from "../firebase"; //firestore instance
import { doc, setDoc, Timestamp, collection, getDocs, addDoc, query, onSnapshot } from "firebase/firestore"; //import firestore functions

//Creates a document for the user in our users collection
export const createUserOnRegister = (user, username) => {
    //document reference: doc(firestore init, collection name, optional - document name/id)
    const userRef = doc(db, 'users', user.uid)

    //create data
    const userData = {
        email: user.email,
        username: username,
        role: 'student',
        dateCreated: Timestamp.fromDate(new Date())
    }

    //set a document: setDoc(document reference, data we want to set, any additional options like merge)
    return setDoc(userRef, userData)
}

//Get all the user documents
export const getAllUsers = async () => {

    const users = [];
    //get snapshot of our users collection
    const querySnapshot = await getDocs(collection(db, 'users'));

    //need to loop through snapshot and get each document's data
    querySnapshot.forEach((doc) => {

        let user = {...doc.data(), uid: doc.id}
        users.push(user);
    })

    return users;

}

//Update our Profiles Data
export const updateProfile = (uid, data) => {
    const userRef = doc(db, 'users', uid)
    return setDoc(userRef, data, {merge: true}) //add the option to merge document, not overwrite
}


//Create a new project function
export const newProject = (project) => {
    return addDoc( collection(db, 'projects'), project )
}

//listen for real time updates on all projects
export const listenToAllProjects = async () => {
    // const q = query( collection(db, 'projects') )

    // let projects = []
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //     projects = []
    //     querySnapshot.forEach((doc) => {
    //         projects.push(doc.data())
    //     })

    // })

    // return projects

    let projects = []
    //get snapshot of our project collection
    const querySnapshot = await getDocs(collection(db, 'projects'));

    //need to loop through snapshot and get each document's data
    querySnapshot.forEach((doc) => {

        let project = {...doc.data(), uid: doc.id}
        projects.push(project);
    })

    return projects;

}