const options = {
    method:'GET',
    headers: {
        'Ocp-Apim-Subscription-Key': `a908dae1-863a-40b3-a30d-c8f42983d49e`,
        'languageId': 'English',
        'Accept': 'application/xml'
    }
};

fetch('https://www.broadage.com/football/match/list/results?date={{dd/mm/yyyy}}', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));