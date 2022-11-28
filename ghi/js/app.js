function createCard(name, description, pictureUrl, starts, ends){
    // console.log(name, description, pictureUrl)
    return `
    <div class="col">
    <div class="card">
    <img src="${pictureUrl}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${description}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">${starts} - ${ends}</small>
      </div>
    </div>
    </div>
    `
}


window.addEventListener('DOMContentLoaded', async () => {
// console.log('Loaded potato')
// const cardArr = []
const url = 'http://localhost:8000/api/conferences/';
try{
    const response = await fetch(url);
    // console.log('response: ',response);

    if (!response.ok) {
        // Figure out what to do when the response is bad
        console.log("Bad response")
      } else {
        const data = await response.json();
        //  console.log(data)
        for(let conference of data.conferences){
            //console.log(conference.href)
            const detailUrl = `http://localhost:8000${conference.href}`;
            const detailResponse = await fetch(detailUrl);
            if(detailResponse.ok){
                const details = await detailResponse.json();
                // console.log(details)
                const title = details.conference.name;
                const description = details.conference.description;
                const pictureUrl = details.conference.location.picture_url;
                const starts = new Date(details.conference.starts).toLocaleDateString('en-US');
                const ends = new Date(details.conference.ends).toLocaleDateString('en-US');
                const html = createCard(title, description, pictureUrl, starts, ends);
                // console.log(html)
                // cardArr.push(html)

                const column = document.querySelector('.row');
                column.innerHTML += html;
        }

        // const conference = data.conferences[0];
        // // console.log(conference);
        // const nameTag = document.querySelector('.card-title')
        // nameTag.innerHTML = conference.name

        // // conference detail

        //     console.log('details:',details);
        //     const detailDesc = document.querySelector('.card-text')
        //     detailDesc.innerHTML = details.conference.description

        //     const imageTag = document.querySelector('.card-img-top')
        //     imageTag.src = details.conference.location.picture_url;
        }
        //  console.log(cardArr)



        // //console.log(col, row)
        // var counter = 0
        // var row = '<div class="row">'
        // // var checker = []
        // for(let i = 0; i< cardArr.length; i++){
        //   console.log(i, counter)
        //   var col = '\n <div class="col">'

        //   col += cardArr[i]
        //   col += '</div>'
        //   //console.log(col)
        //   if(counter <= 2) {
        //   row += col
        //   counter++
        //   // checker.push(col)
        //   console.log('Building row:',row)
        //   } else if(counter > 2){
        //     row += '\n </div>'
        //     console.log('Ready to append:',row)
        //     const container = document.querySelector('.container');
        //     container.innerHTML += row;

        //     // if(i === cardArr.length-1 && checker.length !==0){
        //     //   row += col
        //     //   row += '\n </div>'
        //     // console.log('Ready to append:',row)
        //     // const container = document.querySelector('.container');
        //     // container.innerHTML += row;
        //     // }
        //     // checker=[]
        //     // append to dom
        //     counter = 0
        //     row = '<div class="row">'
        //     i--
        //     console.log('Row appended Counter and row resst')
        //   }
        //   // counter++

        // }


      }
    } catch (e) {
      // Figure out what to do if an error is raised
      console.log('Error',e)
    }
});
