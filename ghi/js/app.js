window.addEventListener('DOMContentLoaded', async () => {
// console.log('Loaded potato')
const url = 'http://localhost:8000/api/conferences/';
try{
    const response = await fetch(url);
    // console.log(response);
    if (!response.ok) {
        // Figure out what to do when the response is bad

      } else {
        const data = await response.json();
        const conference = data.conferences[0];
        // console.log(conference);
        const nameTag = document.querySelector('.card-title')
        nameTag.innerHTML = conference.name

        // conference detail
        const detailUrl = `http://localhost:8000${conference.href}`;
        const detailResponse = await fetch(detailUrl);
        if(detailResponse.ok){
            const details = await detailResponse.json();
            console.log('details:',details);
            const detailDesc = document.querySelector('.card-text')
            detailDesc.innerHTML = details.conference.description

            const imageTag = document.querySelector('.card-img-top')
            imageTag.src = details.conference.location.picture_url;
        }



      }
    } catch (e) {
      // Figure out what to do if an error is raised
      console.log('Oops error occured')
    }
});
