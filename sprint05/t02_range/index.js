function checkDivision(a = 1, b = 60)
{
    for(let i = a; i <= b; i++)
    {
        if(i % 2 === 0 && i % 10 === 0 && i % 3 === 0)
        {
            console.log(`The number ${i} is divisible by 2, is divisible by 3, is divisible by 10`);
        }
        else if(i % 2 === 0 && i % 10 === 0)
        {
            console.log(`The number ${i} is divisible by 2, is divisible by 10` );
        }
        else if(i % 3 === 0 && i % 10 === 0)
        {
            console.log(`The number ${i} is divisible by 3, is divisible by 10`);
        }
        else if (i % 2 === 0 && i % 3 === 0)
        {
            console.log(`The number ${i} is divisible by 2, is divisible by 10` );
        }
        else  if(i % 2 === 0)
        {
            console.log(`The number ${i} is divisible by 2` );
        }
        else if(i % 3 === 0)
        {
            console.log(`The number ${i} is divisible by 3` );
        }
        else if(i % 10 === 0)
        {
            console.log(`The number ${i} is divisible by 10` );
        }
        else
        {
            console.log(i + "-");
        }
    } 
}
module.exports.checkDivision = checkDivision;