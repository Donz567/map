// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigs = {
    apiKey: "AIzaSyDf1qwBedeofCuFM_B81-qiG7cn90N01_c",
    authDomain: "tigomdatabase.firebaseapp.com",
    databaseURL: "https://tigomdatabase-default-rtdb.firebaseio.com",
    projectId: "tigomdatabase",
    storageBucket: "tigomdatabase.appspot.com",
    messagingSenderId: "109845825628",
    appId: "1:109845825628:web:7c270a16336ca7f094fe99",
    measurementId: "G-7M138X36B5"
  };

  firebase.initializeApp(firebaseConfigs);
    let dbs = firebase.firestore();

    function GetAllDatafrmPetStore(){
        dbs.collection("PetStore").get().then((queryPetstore)=>{
          var petstore = [];
          queryPetstore.forEach(docs => {
            petstore.push(docs.data());
          });
          console.log(petstore);
        });
      }
      window.onload = GetAllDatafrmPetStore;