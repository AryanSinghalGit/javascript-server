let user=[
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        AryanSinghal: 'aryan.singhal@successive.tech',
        RahulSadhukhan: 'rahul.sadhukhan@successive.tech'
    },
    {
        traineeEmail2: 'trainee1@gmail.com',
        reviewerEmail2: 'reviewer1@hotmail.com'
    },
    {
        Aman: 'Aman@successive.tech',
        VinayChaudhary: 'vinay.chaudhary@successive.tech'
    }
];
let regex=/[a-z]([[-]*\w+[.]*){1,63}@successive[.]tech$/gmi;
let email;
let temp=[];
let true_arr=[];
let false_arr=[];
validateUser(user);
function validateEmail(email)
{
    if(email.match(regex)) 
    {
       // console.log("true");
        return true;
    }
    else
    {
       // console.log("false");
        return false; 
    }

}


function validateUser(user)
{
   user.forEach(function(value,index)
    { 
        const myobj=Object.values(user[index]);
        if(validateEmail(myobj[0])){
            temp=Object.keys(user[index]);
            true_arr.push(temp[0]);
        }
        else
        {
            temp=Object.keys(user[index]);
            false_arr.push(temp[0]);  
        }  
        if(validateEmail(myobj[1])){
            temp=Object.keys(user[index]);
            true_arr.push(temp[1]);
        }
        else
        {
            temp=Object.keys(user[index]);
            false_arr.push(temp[1]);  
        }
           
    });
    console.log("Valid Users are:\n");
    true_arr.forEach(element => console.log(element));
    console.log("\nNo. of Valid Users: ",true_arr.length);
    console.log("-----------------------------------------------------")
    console.log("\nInvalid Users are:\n");
    false_arr.forEach(element => console.log(element));
    console.log("\nNo. of Invalid Users: ",false_arr.length);
        

}










// let boolean = user.map(value,index) => { 
//    const myobj=Object.values(user[index])
//    if(myobj[0].match(regex))
//      // console.log();
// }; ///[a-z]([[-]*\w+[.]*){1,63}@successive[.]tech$/gmi