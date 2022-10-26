# Project

Il progetto consiste nella realizzazione di un'applicativo web per la gestione di dati, come backend con node.js ed express.js, come frontend React.
Per lo storage e la gestione dei dati è stato usato un database mysql.

## Strumenti

Abbiamo bisogno di XAMPP o MAMP per avviare un server locale.

## Installazione

Dopo aver clonato o scaricato la repository apriamo la directory nel terminale, a questo punto entriamo all'interno della directory **server** ed eseguiamo ``` npm install ``` per installare le dependencies
```bash
cd server
npm install
```

Effettuiamo la stessa operazione all'interno della directory **client**, uscendo però prima dalla dir **server**
```bash
../
cd client
npm install
```

***
Apriamo la nostra directory in un qualsiasi IDE come Visual Studio Code (per comodità le operazioni descritte sopra si possono effettuare all'interno di VSCode).

Prima di tutto passiamo alla creazione del database visitando il proprio indirizzo di [phpmyadmin](http://localhost:8888/phpmyadmin/) creato dal server locale che abbiamo eseguito all'inizio.
Creiamo un utente con tutti i privilegi per il database appena creato e inserimento le credenziali all'interno del file ```Database.js``` contenuta nella directory server, all'interno di ```config```.


```javascript
const db = new Sequelize('Nome Database', 'Utente', 'Password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889 //inserisci la porta del server phpmyadmin
})
```

Salviamo il file. Tramite terminale, assicurandoci di essere nella cartella server, eseguire il comando ```npm run devStart```, il server partirà e sarà raggiungibile all'indirizzo [http://localhost:3000](http://localhost:3000).

Per avere la sicurezza che il server sia stato eseguito e che la connessione sia andata a buon fine basta visitare phpmyadmin e vedere se all'interno del nostro database creato in precedenza ci sia una tabella con nome **investments**.

A questo punto non rimane che mandare in esecuzione il frontend, per poter utilizzare l'applicativo. Apriamo un altro terminale, lasciando quello del backend in esecuzione, entriamo nella directory **client** ed eseguiamo il comando ```npm run start```. 
Il terminale ci dirà che la porta 3000 è gia occupata, premere ```y```.

## Utilizzo
Visitando la pagina [localhost:3001](http://localhost:3001) saremo all'interno della home, tramite l'header possiamo navigare tra le pagine, inizialmente la lista sarà vuota in quanto non ci sono record all'interno del database. Basterà cliccare su "Create" per inserire un nuovo investimento; in seguito all'invio dei dati saremo reindirizzati automaticamento alla pagina lista.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)