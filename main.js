// functionality

// 0- attache an event to the button search and get the user unput 
let searchBtn=document.querySelector('.searchBar__btn');
let searchInput=document.querySelector('.searchBar__input');
let userName;

searchBtn.addEventListener('click',function(){
     userName=searchInput.value;
     if (!userName)return;
     getUserData(userName);
})


// 1-We need to fetch the server and get the data
function getUserData(user){
    fetch(`https://api.github.com/users/${user}`)
    .then(response=>response.json())
    .then((data)=>console.log(data))
    .catch(err => console.error(err))
}

// 2-create an Html variable containing the html in our app and append it by the body 
// 3-create the switch light to change the css color variable

