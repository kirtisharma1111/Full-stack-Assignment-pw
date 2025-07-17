//Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name.
let contacts = new Map();
contacts.set("Kirti", {age:22, email: "kirti@example.com", location: "Delhi"});
contacts.set("Aman", {age:17, email: "aman@example.com", location:"Delhi"});
function getContactDetails(name){
    if(contacts.has(name)){
        return contacts.get(name);
    }else{
        return "Contact not found.";
    }
}
console.log(getContactDetails("Kirti"));
console.log(getContactDetails("Aman"));
