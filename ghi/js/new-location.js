window.addEventListener('DOMContentLoaded', async() =>{
    // console.log("DOM Loaded")
    const url = "http://localhost:8000/api/states/";
    try{
        const response = await fetch(url);

        if(!response.ok){
            const badResponse = '<div class="alert alert-warning" role="alert">Oops Bad Response</div>'
            const alert = document.querySelector('main');
            alert.innerHTML += badResponse;
            console.log("Bad response")
        }else{
            const data = await response.json();
            console.log("Data:",data)
            //render states into dropdown options
            const selectTag = document.getElementById('state');
            for(let state of data.states){
                let option = document.createElement('option')
                option.value += state.abbreviation;
                option.innerHTML += state.name;
                selectTag.appendChild(option)
            }
            //add event to listen for submit
            const formTag = document.getElementById('create-location-form');
            formTag.addEventListener('submit', async event => {
                event.preventDefault();
            //receive and convert data to JSON
                const formData = new FormData(formTag);
                const json = JSON.stringify(Object.fromEntries(formData));
                console.log("JSON:",json);


            const locationUrl = 'http://localhost:8000/api/locations/';
            const fetchConfig = {
                method: "post",
                body: json,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response1 = await fetch(locationUrl, fetchConfig);
            if (response1.ok) {
                formTag.reset();
                console.log("form reset")
                const newLocation = await response1.json();
                console.log(newLocation);
            }
            });


        }
    }
    catch (e){
        // Figure out what to do if an error is raised
        const error = '<div class="alert alert-danger" role="alert">Error encountered</div>'
        const alert = document.querySelector('main');
        alert.innerHTML += error;
        console.log("Error:", e)
      }
});
