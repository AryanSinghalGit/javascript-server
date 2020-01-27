
export function validateEmail(email)
{
    const regex=/[a-z]([[-]*\w+[.]*){1,63}@successive[.]tech$/gmi;
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