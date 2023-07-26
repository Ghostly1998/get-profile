//getuser name from user
function getUserName() {
    //save entered username and send to fetch data.
    const userName = prompt("Enter Git username: ");
    getGitProfile(userName);
}
//fucntion takes username entered by user 
//and fetches data.
function getGitProfile(username) {
    fetch(`https://api.github.com/users/${username}`)
    //convert response to json for readability
    .then(response => response.json())
    //send data for displaying
    .then(response => dispayUserData(response))
    //catch any error and display it on console.
    .catch(err => {
        console.log(err);
    });
}
//display data fetched from git. 
function dispayUserData(data) {
    //get div element
    const para = document.getElementsByClassName('user-data')[0];
    //store data to be displayed inside variables
    const userName = data.name;
    const userUrl = data.url;
    const updateDate = data.updated_at;
    // console.log(userName, userUrl, updateDate); 
    //display data in a paragraph.
    para.innerHTML = `Name: ${userName}<br> Visit Profile: ${userUrl}<br> Last Updated on: ${updateDate}`;
}

//get button fro html file
//add event listener for button
const newBtn = document.getElementsByClassName('new-btn')[0];
newBtn.addEventListener('click', getUserName);