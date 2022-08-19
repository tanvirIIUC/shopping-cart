function count(input1,input2)
{
    if(input2==='increase')
    {
        const numberIncrease=document.getElementById(input1);
        const numberIncreaseString = numberIncrease.value;
        const numberIncreaseNumber = parseInt(numberIncreaseString)+1;
        numberIncrease.value= numberIncreaseNumber;  
        return numberIncreaseNumber;
    }
    else {
        const numberIncrease=document.getElementById(input1);
        const numberIncreaseString = numberIncrease.value;
        const numberIncreaseNumber = parseInt(numberIncreaseString)-1;
        numberIncrease.value= numberIncreaseNumber;  
        return numberIncreaseNumber;

    }   

}
function price(mble)
{
    const mbleprice =  mble*1229;
    return mbleprice;
    
}
function pricecase(mblecase)
{
    const caseprice =  mblecase*59;
    return caseprice;
    
}
 

document.getElementById('phoneIncrease').addEventListener('click',function()
{
   const mble= count('countdisplayphone', 'increase');
   const priced= price(mble);
   const priceDisplayMble = document.getElementById('totalMblePrice');
    const priceDisplayMblestring = priceDisplayMble.innerText;
    const priceDisplayMblenumber = parseInt(priceDisplayMblestring);
    priceDisplayMble.innerText=priced;
    
        
})
document.getElementById('phoneDecrease').addEventListener('click',function()
{
    const mble1=count('countdisplayphone');

     const priced= price(mble1);
     const priceDisplayMble = document.getElementById('totalMblePrice');
     const priceDisplayMblestring = priceDisplayMble.innerText;
     const priceDisplayMblenumber = parseInt(priceDisplayMblestring);
     priceDisplayMble.innerText=priced;
    
})
document.getElementById('caseIncrease').addEventListener('click',function()
{
     const mblecase= count('countdisplaycase','increase');
    const priced= pricecase(mblecase);
    const priceDisplayMble = document.getElementById('totalCasePrice');
    const priceDisplayMblestring = priceDisplayMble.innerText;
    const priceDisplayMblenumber = parseInt(priceDisplayMblestring);
    priceDisplayMble.innerText=priced;
    
})
document.getElementById('caseDecrease').addEventListener('click',function()
{
    const mblecase =  count('countdisplaycase');
    const priced= pricecase(mblecase);
    const priceDisplayMble = document.getElementById('totalCasePrice');
    const priceDisplayMblestring = priceDisplayMble.innerText;
    const priceDisplayMblenumber = parseInt(priceDisplayMblestring);
    priceDisplayMble.innerText=priced;

    
})