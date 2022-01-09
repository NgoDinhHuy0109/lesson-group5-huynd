function isPrime(n){
    let nt=1;
    if(n<2) return nt=0;
    for(let i=2;i<n;i++)
        if(n%i==0) {
            nt=0;
            break;
        }
    return nt;
}
let n=prompt('Enter a number to check prime :');
let check=isPrime(n);
if(check ==1)
{
    console.log(n + "is prime");
    document.getElementById("result-view").innerHTML = `${n} là số nguyên tố`;
}
else {console.log(n + "is not prime");
document.getElementById("result-view").innerHTML = `${n} khongo là số nguyên tố`;} 