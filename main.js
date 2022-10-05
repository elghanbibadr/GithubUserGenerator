// functionality

// 0- attache an event to the button search and get the user unput 
let searchBtn=document.querySelector('.searchBar__btn');
let searchInput=document.querySelector('.searchBar__input');
let userName=document.querySelector('.user__name');
let user=document.querySelector('.user');
let userNameLink=userName.nextElementSibling;
let joinedateOfCurrentUser=userNameLink.nextElementSibling;
let userBio=document.querySelector('.user__bio');
let currentUserImage=document.querySelector('.user__image');
let repoNumber=document.querySelector('.repo-number');
let followersNumber=document.querySelector('.followers-number');
let followingNumber=document.querySelector('.following-number');
let currentUserLocation=document.querySelector('.currentUserLocation')
let currentTwitterName=document.querySelector('.currentUserTwitter');
let currentUserBlog=document.querySelector('.currentUserBlog');
let currentUserCompany=document.querySelector('.currentUserCompany');

// let userLogin
searchBtn.addEventListener('click',function(){
    let enteredUserName=searchInput.value;
     if (!enteredUserName)return;
     getUserData(enteredUserName);
})


// 1-We need to fetch the server and get the data
function getUserData(user){
    fetch(`https://api.github.com/users/${user}`)
    .then(response=>response.json(),err=>alert(err))
    .then((data)=>{
         if (data.message)return renderError();
         // 2-add the data to the dom
      let {login,bio,created_at:joinedDateOfNewUser,avatar_url:newUserImageSource,public_repos,followers,following,location,twitter_username,blog,company}=data;
      console.log(data);
      userName.textContent=login;
       userNameLink.textContent=`@${login}`;
       joinedateOfCurrentUser.textContent='Joined ' + formateDateToString(joinedDateOfNewUser);
       userBio.textContent=bio;
       currentUserImage.src=newUserImageSource;
       repoNumber.textContent=public_repos;
       followersNumber.textContent=followers;
       followingNumber.textContent=following;
       currentUserLocation.textContent=location || 'Not Available' ;
       currentTwitterName.textContent=twitter_username || 'Not Available';
       currentUserBlog.textContent=blog || 'Not Available' ;
       currentUserCompany.textContent=company || 'Not Available';
    })
    

  
}
// 3-create the switch light to change the css color variable


// formate date to utc string and remove current time 

function formateDateToString(date){
    let formattedDate=new Date(`${date}`);
    return formattedDate.toUTCString().split(' ').slice(1,4).join(' ');
}

function renderError(){
    // let errorMessage='No result';
    // if (!document.querySelector('input').value)return;
    let errorMessageContainer=document.createElement('p')
    errorMessageContainer.textContent='No result';
    errorMessageContainer.style.color='red';
    searchBtn.insertAdjacentElement('beforebegin',errorMessageContainer);
  
setTimeout (()=>errorMessageContainer.style.display='none',2000)
}