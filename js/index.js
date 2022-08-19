function count(input1,input2)
{
    if(input2==='increase')
    {
        const numberIncrease=document.getElementById(input1);
        const numberIncreaseString = numberIncrease.value;
        const numberIncreaseNumber = parseInt(numberIncreaseString)+1;
        numberIncrease.value= numberIncreaseNumber;  
    }
    else {
        const numberIncrease=document.getElementById(input1);
        const numberIncreaseString = numberIncrease.value;
        const numberIncreaseNumber = parseInt(numberIncreaseString)-1;
        numberIncrease.value= numberIncreaseNumber;  

    }   

}

document.getElementById('phoneIncrease').addEventListener('click',function()
{
    count('countdisplayphone', 'increase');
    
})
document.getElementById('phoneDecrease').addEventListener('click',function()
{
    count('countdisplayphone');
    
})
document.getElementById('caseIncrease').addEventListener('click',function()
{
    count('countdisplaycase','increase');
    
})
document.getElementById('caseDecrease').addEventListener('click',function()
{
    count('countdisplaycase');
    
})