console.log("From Data Bonus 2");
const data1OfDolphins = function(score1, score2, score3){
    return score1+score2+score3/3;
}
const averageScoreDolphins1 = data1OfDolphins( 97, 112 , 101);
console.log("Average score of Dolphins",averageScoreDolphins1);

const data1OfKoalas = function(score1, score2, score3){
    return score1+score2+score3/3;
}
const averageScoreKoalas1 = data1OfKoalas(109, 95 , 106);
console.log("Average score of Koalas",averageScoreKoalas1);

var compare = function(){
    if(averageScoreDolphins1>averageScoreKoalas1&& averageScoreDolphins1 >=100){
        console.log("Winner of the Competition is Dolphins");

    }else if(averageScoreKoalas1>averageScoreDolphins1&& averageScoreKoalas1 >= 100 ){
        console.log("Winner of the Competition is Koalas");
    }else if (averageScoreDolphins1 == averageScoreKoalas1 
        && averageScoreKoalas1 >= 100 && averageScoreDolphins1 >= 100){
        console.log("Competition is draw");

    }else{
        console.log("No team wins the trophy");
    }
}
compare();
