// a user need to be able to send messages
//messages need to be stored somewhere
// need to be able to read individual messages


// create a message, must have message data structure
//classes start with a capital letter, 95 percent of the time the class name is singular,not plural

// ...
// let inbox=[] // or new Array
// //store messages in this array
// class Message {
//   constructor(content) {
//     this.content=content
//     inbox.push(this)
//     // the array has now 2 messages
//     //'this'=this instance, this message right here,each individualmessage created at that time,,this message's content
//   }
// }
// let msg1=new Message('This is the first message')
// let msg2=new Message('This is the second message')
// ...

//msg1 is an instance of the class Message

//any object based on a class is called an instance
//an instance represents one object based on the class names
// an argument of a function is a value that must be provided to obtain the function result
//if not provided, there wont be results








// user.sendMessage("noor","hello")
class User {
  constructor(name){
    this.name= name
    this.inbox=[]
  }
  sendMessage(receiver,content){
    let msg=new Message(receiver, content)
    receiver.inbox.push(msg)
    return 'your message to ${receiver.name} has been sent'
  }

readMessage (i){
  return this.inbox[i].content
}
}
class Message {
  constructor( reciever, content){
    this.receiver= receiver
    this.content=content
  }
}
let user1= new User("sadia")
let user2= new User("Mohina")
