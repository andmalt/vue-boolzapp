// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.

let app = new Vue({
    el:'#app',
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        // images contacts
        avatarsImg: [
            {
                name:'_1',
                img:'img/avatar_1.jpg',
                alt: 'immagine avatar 1'
            },
            {
                name:'_2',
                img:'img/avatar_2.jpg',
                alt: 'immagine avatar 2'
            },
            {
                name:'_3',
                img:'img/avatar_3.jpg',
                alt: 'immagine avatar 3'
            },
            {
                name:'_4',
                img:'img/avatar_6.jpg',
                alt: 'immagine avatar 6'
            },
            {
                name:'_5',
                img:'img/avatar_5.jpg',
                alt: 'immagine avatar 5'
            },
            {
                name:'_6',
                img:'img/avatar_4.jpg',
                alt: 'immagine avatar 4'
            },
            {
                name:'_7',
                img:'img/avatar_7.jpg',
                alt: 'immagine avatar 7'
            },
            {
                name:'_8',
                img:'img/avatar_8.jpg',
                alt: 'immagine avatar 8'
            },
        ],
        contactIndex: 0 ,
        inputUser:'',
        searchUser:'',

    },
    methods:{
        // insert the current index of the contact
        selectContacts: function(index){
            this.contactIndex = index;
        },
        // message write from the user
        addMessages:function(){
            // if variable has a content
            if(this.inputUser.trim().length > 0){

                // create an object to populate
                let messageInput = {
                    date:'28/03/2020 16:45:22',
                    text:'',
                    status: 'sent',
                };

                // insert variable content in the object 
                messageInput.text = this.inputUser.trim();
                // delete content of the variable
                this.inputUser = '';
                // then send message
                this.contacts[this.contactIndex].messages.push(messageInput);
            };
        },
        // reply message from the pc
        replyMessagge:function(){

            // create an object to populate
            let  messageOutput={
                date:'28/03/2020 16:45:23',
                text:'',
                status: 'received',
            };

            // insert value content in the object
            messageOutput.text = 'ok';
            // then send message
            this.contacts[this.contactIndex].messages.push(messageOutput)
        },
        // sending message and reply from the pc after one second
        addKeyUp:function(){
            this.addMessages();       
            setTimeout(() => this.replyMessagge() , 1000);
        },
        // search contacts on search bar
        search:function myFunction() {
            this.contacts.filter((element, index)=> {
                if(element.name.trim().toLowerCase().slice(0,this.searchUser.length).includes(this.searchUser.trim().toLowerCase())){
                    return element.visible = true;
                }
                return element.visible = false;
            });
        },
    },
});