/**
 * Created by hoangnd on 7/27/17.
 * Working with Files
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */

console.log("Working with Files");
var fileManager = require('./fileManager');
const fileName = __dirname + '/../data/temp.txt';
fileManager.createNewFile(fileName);
let jsonObject = {
    foods: [
        {
            foodName: "Cream Tea",
            foodDescription: "This is a cup of cream tea"
        },
        {
            foodName: "Japanese Salad",
            foodDescription: "Very delicious Japanese Salad"
        },
        {
            foodName: "Korean Kimchi",
            foodDescription: "Traditional Korean Food"
        },
        {
            foodName: "Fresh mushroom",
            foodDescription: "Fresh mushroom with vegetables"
        },
        {
            foodName: "Oysters",
            foodDescription: "Oysters with ice rock"
        },
        {
            foodName: "Multiple salad",
            foodDescription: "Salad mixed with mushroom"
        },
        {
            foodName: "Vegetable",
            foodDescription: "Fresh vegetables"
        }
    ],
    resultCode: 200,
    restaurantName: "Sasimi BBQ"
};
// fileManager.saveJsonObjectToFile(jsonObject, fileName);
jsonObject.address = "25 Lan Ong, Bong Bang, Haiphong, Vietnam";
fileManager.saveJsonObjectToFile(jsonObject, fileName);
fileManager.readJsonObjectFromFile(fileName);


