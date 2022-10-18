// const lockInChoice = async (event) => {
//     event.preventDefault();

//     const response = await fetch('/api/userPick', {
//         method: 'POST',
//         body: JSON.stringify({ teamSelected, week:1 }),
//         headers: { 'Content-Type': 'application/json' }
//     })      
//     console.log(response)    
  
//   };
  
//   document
//     .querySelector('.selectTeam')
//     .addEventListener('click', lockInChoice);

const btn = document.getElementById("teamSelectBtn");

  btn.addEventListener("click", () => {
    console.log("hello")
  })

  const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
// //   const data = new FormData(form);
//   const teamSelected = document.querySelector('input[name="availableTeams"]:checked').id;
//   console.log("selected team id " + teamSelected)
// //   console.log(data)

//   //have to insert post request to SQL Database here and then reload the page after to have updated results
//   const btn = document.getElementById("teamSelectBtn");

//   const form = document.querySelector("form");

const lockInChoice = async (teamSelected) => {

  const response = await fetch('/api/userPick', {
      method: 'POST',
      body: JSON.stringify({ teamSelected, week:1 }),
      headers: { 'Content-Type': 'application/json' }
    })         
    console.log(response)

};
form.addEventListener("submit", (event) => {
//   const data = new FormData(form);
event.preventDefault();
  const teamSelected = document.querySelector('input[name="availableTeams"]:checked').id;
  console.log("selected team id " + teamSelected)
  
  lockInChoice(teamSelected)
});