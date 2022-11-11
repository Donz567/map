// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDf1qwBedeofCuFM_B81-qiG7cn90N01_c",
    authDomain: "tigomdatabase.firebaseapp.com",
    databaseURL: "https://tigomdatabase-default-rtdb.firebaseio.com",
    projectId: "tigomdatabase",
    storageBucket: "tigomdatabase.appspot.com",
    messagingSenderId: "109845825628",
    appId: "1:109845825628:web:7c270a16336ca7f094fe99",
    measurementId: "G-7M138X36B5"
  };

  firebase.initializeApp(firebaseConfig);
    let db = firebase.firestore();


    function GetAllDatafrmVetClinic(){
        db.collection("VetClinic").get().then((querySnapshot)=>{
          var vetclinic = [];
          querySnapshot.forEach(doc => {
            vetclinic.push(doc.data());

          });
          console.log(querySnapshot);
            console.log(vetclinic);
        });
    }
    window.onload = GetAllDatafrmVetClinic;