function walkDog(){

    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

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

        const trash = false;

        if(trash){
            resolve("You takeout the Trash 🗑️");
        }
        else{
            reject("You didnt throw the trash")
        } 
    }, 3500);
    })
}

walkDog().then(value => {console.log(value); return cleankitchen()})
         .then(value => {console.log(value); return takeoutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.error(error));