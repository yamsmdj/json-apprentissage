const fs = require('fs');



fs.access('./monDossier', (Error) => {
    if (fs.existsSync('./monDossier')) {
        fs.rmdir('./monDossier', (Error) => {
            if (Error) {
                console.log(`Error : ${Error}`);
            } else {
                console.log('dossier supprimer');
            }
       })
    } else {
        if (Error) {
            console.log(`Error : ${Error}`);
        } else {
            console.log('dossier crée');
        }
    }
})