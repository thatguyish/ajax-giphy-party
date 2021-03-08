console.log("Let's get this party started!");

const webSite = "http://api.giphy.com/v1/gifs/search?";
const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";


async function getGif(q){
    let res = await axios.get(webSite,{params:{q,api_key}});
    const picture = document.createElement("img");
    picture.src = res.data.data[0].images.original.webp;
    document.querySelector('#memes').append(picture);
    console.log();
}

function handleSubmit(e){
    e.preventDefault();
    const userInput = document.querySelector("#search").value;
    getGif(userInput);
}

function handleDelete(e){
    e.preventDefault();
    const memes = document.querySelector("#memes");
    memes.innerHTML = "";
}

const form =document.querySelector('#gifSearch');
form.addEventListener('submit',handleSubmit);

const deleteButton = document.querySelector('#deleteAll');
deleteButton.addEventListener('click',handleDelete);

