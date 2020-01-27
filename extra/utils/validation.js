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
        traineeEmail: 'Aman$2@successive.tech',
        reviewerEmail: 'vinay.chaudhary@successive.tech'
    }
];

function validateEmail(email)
{ 
    let regex=/[a-z]([[-]*\w+[.]*){1,63}@successive[.]tech$/gmi;
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
    let validEmails=[];
    let invalidEmails=[];
   user.forEach(function(value,index)
    { 
        
        const {traineeEmail,reviewerEmail}=user[index];
         // console.log(traineeEmail);
        //console.log(reviewerEmail);
        
        if(validateEmail(traineeEmail)){
            validEmails.push(traineeEmail);
        }
        else
        {
            invalidEmails.push(traineeEmail);  
        }  
        if(validateEmail(reviewerEmail)){
            
            validEmails.push(reviewerEmail);
        }
        else
        {
            invalidEmails.push(reviewerEmail);  
        }
           
    });

    console.log("Valid Users are:\n");
    validEmails.forEach(element => console.log(element));
    console.log("\nNo. of Valid Users: ",validEmails.length);
    console.log("-----------------------------------------------------")

    console.log("\nInvalid Users are:\n");
    invalidEmails.forEach(element => console.log(element));
    console.log("\nNo. of Invalid Users: ",invalidEmails.length);
}

validateUser(user);










