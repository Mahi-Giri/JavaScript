function main() {
    class Message {
        static totalMessages = 0;
        static status = false;  

        constructor(sender, receiver, messageContent) {
            this.sender = sender;
            this.receiver = receiver;
            this.messageContent = messageContent;
        }

        static recordMessage() {
            Message.totalMessages += 1;
        }

        static changeStatus() {
            Message.status = !Message.status;
            console.log(`The status has been changed to ${Message.status ? 'online' : 'offline'}`);
        }

        sendMessage() {
            console.log(`The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`);
            Message.recordMessage();
        }

        displayDetails() {
            console.log(`Sender: ${this.sender}`);
            console.log(`Receiver: ${this.receiver}`);
            console.log(`Message: ${this.messageContent}`);
            console.log(`Status: ${Message.status ? 'online' : 'offline'}`);
            console.log(`Total Message: ${Message.totalMessages}`);
        }

    }

    Message.changeStatus();
    const myMessage = new Message("John", "Jane", "Hello");
    myMessage.sendMessage();
    myMessage.displayDetails();
    return Message;
}

main();



// // For Clearing test cases
// function main() {
//     class Message {
//         static status = false;
//         static totalMessages = 0;

//         constructor(sender, receiver, messageContent) {
//             this.sender = sender;
//             this.receiver = receiver;
//             this.messageContent = messageContent;
//         }

//         static recordMessage() {
//             Message.totalMessages += 1;
//         }

//         static changeStatus() {
//             Message.status = !Message.status;
//             console.log(`The status has been changed to ${Message.status ? "online" : "offline"}`);
//         }

//         sendMessage() {
//             console.log(`The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`);
//             Message.recordMessage();
//         }

//         displayDetails() {
//             console.log(`Sender: ${this.sender}`);
//             console.log(`Receiver: ${this.receiver}`);
//             console.log(`Message Content: ${this.messageContent}`);
//             console.log(`Status: ${Message.status ? "online" : "offline"}`);
//             console.log(`Total Message: ${Message.totalMessages}`);
//         }
//     }

//     return Message;
// }