const lockInChoice = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/userPick', {
        method: 'POST',
        body: JSON.stringify({ teamId:1, week:1 }),
        headers: { 'Content-Type': 'application/json' }
    })          
  
  };
  
  document
    .querySelector('.selectTeam')
    .addEventListener('click', lockInChoice);