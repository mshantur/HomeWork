
let filecontent = {};


const readJSON = function() {
    $.getJSON( "1.json", function(data) {
        console.log(data);	
    });
    console.log(data.flag);
    //var mydata = JSON.parse(data);

    //return mydata;
};

readJSON();