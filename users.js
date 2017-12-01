var contacts = [
  {id: 0, name: 'Ned Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
  {id: 1, name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
  {id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
  {id: 3, name: 'Jon Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
  {id: 4, name: 'Arya Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
  {id: 5, name: 'Jora Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
  {id: 6, name: 'Tyrion Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
  {id: 7, name: 'Stannis Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
  {id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
  {id: 9, name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
  {id: 10, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
  {id: 11, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'}
];

exports.findAll = function(){
  return contacts;
};
exports.findById = function(myid) {
 let col = {}
 let s = 1;

  for(var i = 0; i<contacts.length ;i++){
      if(contacts[i].id == myid) {
           col[1] = contacts[i];
           s++;

          }
      }
      
      return col;
  
}; 
exports.findByName = function(myName){
  let col_1 = {}
  let a=1;
  for(var u = 0; u<contacts.length ;u++){
      if(contacts[u].name == myName) {
           col_1[a] = contacts[u];
           a++;
          }
   }
   
   return col_1;     
};
exports.DeleteID = function(del_id){
  contacts.splice(del_id,1);
};
exports.AddNew = function(body){
 let newContacts = body;
 newContacts.id = contacts.length;
 contacts.push(newContacts);
  
 return 'Add new contacts complete';
};
exports.EditContact = function(id,body){
 let edit_contact =body;
 let edit_id = id;
 
 contacts[edit_id] = edit_contact;
 contacts[edit_id].id = edit_id;
 
 return 'Edit complete';
};
 