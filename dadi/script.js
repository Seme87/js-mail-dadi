// 1 GENERARE UN NUMERO RANDOMICO PER IL NOSTRO USER
const numberUser = Math.floor(Math.random()*7);
console.log(numberUser);
// 2 GENERARE UN NUMERO RANDOMICO PER LA CPU
const cpu = Math.floor(Math.random()*7);
console.log(cpu);
// DETERMINARE QUAL'è IL NUMERO MAGGIORE E DICHIARARE CHI HA VINTO CON UN ALERT
if(numberUser > cpu){
    console.log("user hai vinto!")
}else if(cpu > numberUser){
    console.log("user hai perso!")
    
}else{
    console.log("Riprova!");
    // window.location.reload();
    
}