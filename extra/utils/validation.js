let user=[
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        traineeEmail: 'aryan.singhal@successive.tech',
        reviewerEmail: 'rahul.sadhukhan@successive.tech'
    },
    {
        traineeEmail: 'trainee1@gmail.com',
        reviewerEmail: 'reviewer1@hotmail.com'
    },
    {
        traineeEmail: 'Aman@successive.tech',
        reviewerEmail: 'vinay.chaudhary@successive.tech'
    }
];
let regex=/[a-z]([[-]*\w+[.]*){1,63}@successive[.]tech$/gmi;
let email;
//let temp=[];
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
        
        const {traineeEmail,reviewerEmail}=user[index];
         // console.log(traineeEmail);
        //console.log(reviewerEmail);
        
        if(validateEmail(traineeEmail)){
            true_arr.push(traineeEmail);
        }
        else
        {
            false_arr.push(traineeEmail);  
        }  
        if(validateEmail(reviewerEmail)){
            
            true_arr.push(reviewerEmail);
        }
        else
        {
            false_arr.push(reviewerEmail);  
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