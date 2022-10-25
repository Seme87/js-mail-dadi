// 1 CHIEDERE ALL'UTENTE LA SUA MAIL
const emailUtente = prompt("Inserisci la tua mail");
// 2 CREA UNA LISTA CON TUTTE LE MAIL
const iscritti = ["marco@gmail.com", "luca@gmail.com", "fabio@gmail.com",];
// 3 DICHIARE UNA VARIABILE CON VALORE NULLO CHE POI MODIFICHI NELLA CONDIZIONE DEL CICLO 
let message = "non trovato"

// 3 CONTROLLA ATRRAVERSO UN CICLO CHE LA MAIL INSERITA DALL UTENTE NON SIA STATA GIA INSERITA
for(let i= 0 ; i < iscritti.length; i++){ 
    console.log(iscritti[i]);

    if( iscritti[i] === emailUtente ){
        // 4 DUCHIARA LA VARIABILE COME TROVATA
        message = ("trovato");
        
    }
}

// 5 LANCIA UN ALERT SE LA VARIABILE è UGUALE A TROVATO E SE LA VARIABILE è DIVERSA 
if(message === "trovato" ){
    alert("la tua mail è valida")
}else{
    alert("la tua mail non è stata trovata")
}
