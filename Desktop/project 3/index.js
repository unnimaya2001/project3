const foodChart = require('./food.json'); 
//condition 1to 8
function listOfFoods(food=''){
if (food>0){
    return foodChart.filter((food)=>food.ingredients==food)
}
else{
    return foodChart

}
}
listOfFoods(Fruit);
listOfFoods(Grain);
listOfFoods(Protein);
listOfFoods(Diary);
listOfFoods(Nuts);
listOfFoods(Vegetable);

function sorting(condition){
    if(condition==asec)
    {
        return foodChart.filter((food)=>food.calorie<calorie)

    }
    else if(condition==desc){
        return foodChart.filter((food)=>food.calorie>calorie)

    }
}
sorting(asec);
sorting(desc);

function sortOf(type)
{
    if(type=="protiens"){
        return foodChart.sort((a,b)=>b.protiens-a.protiens)
    }
    else if(type=="cab"){
        return foodChart.sort((a,b)=>a.cab-b.cab)
    }

}
sortOf(protiens);
sortOf(cab);


