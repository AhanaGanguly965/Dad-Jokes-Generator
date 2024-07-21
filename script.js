const btnE1=document.getElementById("btn");
const jokeE1=document.getElementById("joke");
const apikey="z1bREW5M4dvjjZ7RxM9mUQ==CyPg5j14zFUWxKtu";
const options ={
    method:"GET",
    headers:{
        "X-Api-Key": apikey,
    },
};

const apiURL="https://api.api-ninjas.com/v1/dadjokes";
 async function getjoke(){
    jokeE1.innerText="Updating......";
    btnE1.disabled=true;
    btnE1.innerText="Loading..."
    const response=await fetch(apiURL,options);
    const data= await response.json();
    jokeE1.innerText=data[0].joke;
    console.log(data[0].joke);
    btnE1.disabled=false;
    btnE1.innerText="Tell me a joke";
}
btnE1.addEventListener("click",getjoke);