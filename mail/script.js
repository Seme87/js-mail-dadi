// 1 CHIEDERE ALL'UTENTE LA SUA MAIL
const emailUtente = prompt("Inserisci la tua mail");
// 2 CREA UNA LISTA CON TUTTE LE MAIL
const iscritti = ["marco@gmail.com", "luca@gmail.com", "fabio@gmail.com",];
// 3 CONTROLLA CHE LA MAIL INSERITA DALL UTENTE NON SIA STATA GIA INSERITA
for(let i= 0 ; i < iscritti.length; i++){
    console.log(iscritti[i]);

    if( iscritti[i] === emailUtente ){
        // 4 STAMPA IN ALERT SE LA MAIL è PRESENTE
        alert("Questa mail è gia presente")
    }else{
        // 4 STAMPA IN ALERT SE LA MAIL è VALIDA
        alert("Perfetto!!Questa mail è valida!!")
    }
}
