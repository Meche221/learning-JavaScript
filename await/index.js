function walkDog(){

    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = false;

            if(dogwalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You didnt walked the dog");
            }
           
        }, 1500);
    })
}

function cleankitchen() {
    
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            const cleaning = true;

            if(cleaning){
                resolve("You clean the kitchen 🔪");  
            }
            else{
                reject("You didnt cleaned the kitchen");
            }
        }, 2500);
    })
}

function takeoutTrash(){
    
    return new Promise ((resolve, reject) => {
    setTimeout(() => {

        const trash = true;

        if(trash){
            resolve("You takeout the Trash 🗑️");
        }
        else{
            reject("You didnt throw the trash")
        } 
    }, 3500);
    })
}

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleankitchenResult = await cleankitchen();
        console.log(cleankitchenResult);

        const takeoutTrashResult = await takeoutTrash();
        console.log(takeoutTrashResult);
    }
    catch(error){
        console.error(error)
    }
}

doChores();