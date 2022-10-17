let chosenTeam = 1

const lockInChoice = async (event) => {
    event.preventDefault();

    const selectTeam = await fetch('/api/userPick', {
        method: 'POST',
        body: JSON.stringify({ teamId:chosenTeam,weekId:1 }),
        headers: { 'Content-Type': 'application/json' }
    })  
    //   const response = await fetch('/teamselect', {
    //     method: 'GET',
    //   })
  
    //   if (response.ok) {
    //         document.location.replace('/teamselect');
    //       } else {
    //         alert(response.statusText);
    //       }
        
  };
  
  document
    .querySelector('.selectTeam')
    .addEventListener('click', lockInChoice);