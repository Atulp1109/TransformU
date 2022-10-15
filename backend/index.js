const express = require('Express');
const mongoose = require('mongoose');
const ejs = require('ejs')

const app = express();

console.log(__dirname)
app.set('view engine','ejs')
const db_link='mongodb+srv://Atulp1109:AtulPandey@cluster0.nbejhnf.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_link)
.then(function(db){
    console.log("db connected");
})
.catch(function(err){
    console.log(err);
})


const DietSchema= mongoose.Schema({
    breakfast:{
        type:String,

    },
    lunch:{
        type:String
    },
    dinner:{
        type:String,
        
    },
    snack1:{
        type:String
    },
    snack2:{
        type:String,
        
    }
});

const Diet=mongoose.model('Diet',DietSchema);


// (async function createDiet(){
//     let diet={
//         breakfast:"Protien Smoothie, Bean burrite",
//         lunch:"BBQ Cauliflower Steak,Quinoa and Edamame",
//         dinner:"Homemade Trail Mix",
//         snack1:"Apple + 1 Tbsp Peanut Butter",
//         snack2:"1/2 cup Pumpkin Seeds in shell"

//     }
//     let data=await Diet.create(diet);
//     console.log(data);
// })();


app.get('/diet',(req,res)=>{
    Diet.find({},function(err,diet){
        res.render('diet',{
            breakfast:diet[0].breakfast,
            lunch:diet[0].lunch,
            dinner:diet[0].dinner,
            snack1:diet[0].snack1,
            snack2:diet[0].snack2,
            breakfast1:diet[1].breakfast,
            lunch1:diet[1].lunch,
            dinner1:diet[1].dinner,
            snack11:diet[1].snack1,
            snack21:diet[1].snack2

        })
        
    })
})

app.listen(5500,()=>{
    console.log("listening");
    
});

