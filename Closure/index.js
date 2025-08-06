// function outer(){
//     let message = "hello";
//     function inner(){
//         console.log(message);     
//     }
//     inner();
// }

// outer();


// function createCounter(){

//     let count = 0;

//     function increment(){
//         count++;
//         console.log(`count increase to ${count}`);
//     }
//     function getcount(){
//         return count;
//     }

//     return {increment, getcount};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getcount()}`);



function createGame(){
    
    let score  = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();



game.increaseScore(15);
game.decreaseScore(2)
console.log(`The final score is ${game.getScore()}pts`);
