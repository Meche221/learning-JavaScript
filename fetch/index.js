// sorry maintenance of streak didn't get the time to study
fetchData();

async function fetchData(){

    try {
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon/typhlosion");

        if(!response.ok){
            throw new Error("Could not fetch resources");
        }

        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}
