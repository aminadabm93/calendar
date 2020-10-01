//functions 

//update the #currentDay paragraph w/ today's date , fullDay, date, year
$("#currentDay").text(moment().format("MMMM Do[, ] YYYY"));


//update background-color of textarea based on current hour #9-desctiption
function updateColors(){
    //needs to compare the current hour (using moment().hour()) 
    //example - it is 10 am. now the 10 am block needs to have present class
    // the 8 and 9 am need the past class
    // and all others need future class 
    var currentHour = moment().hour();
    console.log(typeof(currentHour));
    //cycle through the time-blocks
    var hours = [9,10,11,12,1,2,3,4,5];
    for(var i=0; i<9; i++){
        //we in the future
        console.log
         if(hours[i]>currentHour)
         {
            $("#"+hours[i]).addClass("future");
         }
         else if(hours[i]==currentHour){
            $("#"+hours[i]).addClass("present");
         }
         else{
            $("#"+hours[i]).addClass("past");

         }

    }
}
updateColors();