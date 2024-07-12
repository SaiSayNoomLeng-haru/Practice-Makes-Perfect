import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue, remove} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
    databaseURL : "https://playground-48902-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'shoppingList');


const inputEl = document.querySelector('.main-container #input-el');
const inputBtn = document.querySelector('.main-container #input-btn');
const ulEl = document.querySelector('.list-container #lists')


onValue(shoppingListInDB, function(snapshot){
    if(snapshot.exists()){
        let lists = Object.entries(snapshot.val());
        clearShoppingList();
    
        for(let i = 0; i < lists.length; i++){
            let currentList = lists[i];
            let listID = currentList[0];
            let listValue = currentList[1];
            appendItem(currentList)
        }
    }
    else{
        ulEl.innerHTML = 'wal sayar shi tr twy htae oo naw my little mermaid &hearts;'
    }
})

inputBtn.addEventListener('click', ()=>{
    let inputValue = inputEl.value;
    push(shoppingListInDB, inputValue);

    clearInputField();
    
});

function clearInputField(){
    inputEl.value = '';
}
function appendItem(item){
    let itemID = item[0];
    let itemValue = item[1];

    let li = document.createElement('li');
    // let liText = document.createTextNode(itemValue);
    li.textContent = itemValue;

    li.addEventListener('click', ()=>{
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
        remove(exactLocationOfItemInDB);
    })

    // li.appendChild(liText);
    ulEl.append(li);

    

}
function clearShoppingList(){
    ulEl.innerHTML = '';
}