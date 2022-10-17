const pickYourTeam = async (event) => {
  event.preventDefault();


    const response = await fetch('/teamselect', {
      method: 'GET',
    })

    if (response.ok) {
          document.location.replace('/teamselect');
        } else {
          alert(response.statusText);
        }
      
};

document
  .querySelector('.pickYourTeam')
  .addEventListener('click', pickYourTeam);
