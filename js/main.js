// Importa il metodo createApp da Vue
const { createApp } = Vue

// Crea una nuova applicazione Vue
const app = createApp({

    // Definisce i dati dell'applicazione
    data() {
        return {
            // Array di contatti, ognuno con nome, avatar, visibilità e messaggi
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'https://th.bing.com/th/id/R.cceee3127152a59ef94d88c33ee8f391?rik=hm2%2f55LBolauWw&pid=ImgRaw&r=0',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'https://th.bing.com/th/id/R.3f86bf9e0dec9c2194a287ecff60d7a0?rik=HjhuxQHVKjKHCw&pid=ImgRaw&r=0',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'https://th.bing.com/th/id/OIP.kURU7OZOlAX_hH-ArdjlOAHaF8?rs=1&pid=ImgDetMain',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10', 
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'https://th.bing.com/th/id/OIP.yuLCSBvNLn35aA-Qec9TUwAAAA?w=450&h=562&rs=1&pid=ImgDetMain',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'https://th.bing.com/th/id/OIP.BKFLSSf5ZqKamUPcH_P4ogHaFj?rs=1&pid=ImgDetMain',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'https://www.chedonna.it/wp-content/uploads/2019/07/test-viso.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'https://th.bing.com/th/id/OIP.Z7LE3lUIU9nCrdctnN4X1wAAAA?w=453&h=340&rs=1&pid=ImgDetMain',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'https://i.pinimg.com/originals/ab/46/4f/ab464f213320700b09b597f45bea6f05.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            newMessage: '',
            searchQuery: '',
            activeContact: null,
            previewMessage: null,
            contextMenuX: 0,
            contextMenuY: 0,
            contextMenuIndex: null,
        };
    },
    // Definisce i metodi dell'applicazione
    methods: {

        // Metodo per ottenere l'ultimo accesso
        getLastAccess(contact) {
            if (contact.messages.length > 0) {
              return contact.messages[contact.messages.length - 1].date;
            }
            return 'Nessun accesso recente';
        },

        // Metodo per impostare un contatto come attivo
        setActiveContact(contact) {
            this.activeContact = contact;
        },

        sendMessage() {
        if (this.newMessage.length > 0) {
            // Metodo per inviare un messaggio
            if (this.activeContact) {
                this.activeContact.messages.push({
                    date: new Date().toISOString(), // Imposta la data e l'ora attuali
                    message: this.newMessage, // Usa il testo del nuovo messaggio
                    status: 'sent' // Imposta lo stato del messaggio come "inviato"
                });
                this.newMessage = '';
                setTimeout(() => {
                  this.activeContact.messages.push({
                    date: new Date().toISOString(), // Imposta la data e l'ora attuali
                    message: 'Ok', // Imposta il testo del messaggio di risposta
                    status: 'received' // Imposta lo stato del messaggio come "ricevuto"
                  });
                }, 1000);
            }
            console.log(this.newMessage);
            this.newMessage = '';
            }
        },

        // Metodo per ottenere l'anteprima del messaggio
        getPreviewMessage(contact) {
            // Controlla se il contatto ha dei messaggi
            if (contact.messages.length > 0) {
                
                // Ottiene l'ultimo messaggio del contatto
                const lastMessage = contact.messages[contact.messages.length - 1].message;
                
                // Se la lunghezza del messaggio è superiore a 30 caratteri, ritorna i primi 30 caratteri seguiti da '...'
                // Altrimenti, ritorna l'intero messaggio
                return lastMessage.length > 30 ? lastMessage.slice(0, 30) + '...' : lastMessage;
            } 
            return ''; // Se il contatto non ha messaggi, ritorna una stringa vuota
        },

        // Metodo per aprire il menù contestuale
        openContextMenu(event, index) {
            // Ottiene l'elemento del messaggio corrispondente all'indice
            const messageElement = this.$refs.messages[index];
            // Ottiene le coordinate dell'elemento del messaggio
            const rect = messageElement.getBoundingClientRect();
            // Imposta le coordinate del menù contestuale in base alle coordinate dell'elemento del messaggio
            this.contextMenuX = rect.left;
            this.contextMenuY = rect.bottom;
            // Imposta l'indice del menù contestuale
            this.contextMenuIndex = index;
        },
        // Metodo per chiudere il menù contestuale
        closeContextMenu() {
            this.contextMenuIndex = null;
        },

        deleteMessage(index) {
            // Elimina il messaggio
            this.activeContact.messages.splice(index, 1);
            this.contextMenuIndex = null;
        }
    },
    // Definisce le proprietà calcolate dell'applicazione
    computed: {
    // Restituisce i contatti che corrispondono alla query di ricerca
        filteredContacts() {
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    }
}); app.mount('#app');
