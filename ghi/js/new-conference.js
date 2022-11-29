window.addEventListener('DOMContentLoaded', async() =>{
    // console.log("Loaded potatoes")
    const url = "http://localhost:8000/api/locations/";
    try{
        const response = await fetch(url);

        if(response.ok){
            const data = await response.json();
            // console.log(data)
            // render location into dropdown
            const selectTag = document.getElementById('location')
            for(let loc of data.locations){
                console.log("LOC:",loc)
                let option = document.createElement('option')
                let locationName = loc.name
                let locationId = loc.id
                option.value += locationId
                option.innerHTML += locationName
                selectTag.appendChild(option)
            }
            // add event to listen for Submit
            const formTag = document.getElementById('create-conference-form');
            formTag.addEventListener('submit', async event =>{
                event.preventDefault();
                const formData = new FormData(formTag);
                const json = JSON.stringify(Object.fromEntries(formData));
                // console.log(json)
                const conferenceUrl = "http://localhost:8000/api/conferences/"
                const fetchConfig = {
                    method: "post",
                    body: json,
                    headers: {
                        "Content-Type": 'application/json',
                    }
                }
                const response1 = await fetch(conferenceUrl, fetchConfig);
                if(response1.ok){
                    formTag.reset();
                    const newConference = await response1.json();
                    console.log(newConference)
                }
            });
        }
    } catch (e){
        console.log("Error")
    }
})
