//------ base class ----

// class Company{
//     constructor(name){
//         this.name=name;
//     }
//     corporate(){
//         console.log("company name is: "+this.name);
        
//     }
// }

// const companies = new Company("DCKAP");

// companies.corporate();

//------ inheritance ------

// class Company{
//     constructor(name){
//         this.name = name;
//     }
//     corporate(){
//         console.log("Company Name is : "+this.name);
        
//     }
// }

// class employee extends Company{
//     constructor(number,name)
//     {
//         super(name);
//         this.number = number;

//     }
//     total(){
//         console.log(this.number+" employees in our company");
        
//     }
// }

// class language extends Company{
//     constructor(languagename,name){
//         super(name)
//         this.languagename=languagename;
//     }
//     type(){
//         console.log("usage language is :" +this.languagename);
        
//     }
// }
// const mycompany = new Company("DCKAP")
// const myemployee = new employee(50);
// const mylanguage = new language("python");

// mycompany.corporate();
// myemployee.total();
// mylanguage.type();


//-------- get & set -------

// class Employee{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     get fullnames(){
//         return "name is :"+ this.name + " ,age is : " +this.age ;
        
//     }

//     set fullnames(name){
//         let names = name.split(" ");
//         if(names.length >=5)
//         {
//             throw new Error("name is incorrect")
            
//         }
//         this.name = names;
//     }
// }

// const company1 = new Employee("priya",21);
// company1.fullnames="priyadharshini"
// console.log(company1.fullnames);


// ------ encapsulation ------

// class Bank {
//     #accountnumber
//     constructor(name, account){
//         this.name = name;
//         this.#accountnumber = account;
//     }
//     user1(){
//         console.log("name is : "+this.name+ ", account number is :"+this.#accountnumber);
        
//     }

//     getuseraccount (){
//         console.log("account number is " + this.#accountnumber);
//     }

//     user2(){
//         console.log("name is :"+this.name+", account number is :"+ this.#accountnumber)
//     }
// }

// const banks = new Bank("priya",1234567890);
// banks.getuseraccount();

// banks.user1("lokesh",4567890);
// banks.user2("mythily",1234567);


//------polymorphysm-----

// class User {
    
//     person(name){
//         console.log(`name is :${name}`);
        
//     }
// }

// class user2 extends User{

//     person(name){
//         console.log(`my name is :${name}`);
//     }
// }

// const users = new user2("priya")

// users.person("priyadharshini")

//------ static ------

// class Maths{
//     static add(a,b){
//         return a+b;
//     }

//     static sub(a,b){
//         return a-b ;
//     }
    
// }

// console.log(Maths.add(10,2));
// console.log(Maths.sub(10,5));

//------- abtraction -----


class MyAccount {
    #password;

    constructor(name, password, username) {
        this.name = name;
        this.#password = btoa(password);
        this.username = username;
    }

    #matchedpassword(password) {
        return btoa(password);
    }

    displayUsername() {
        console.log("My name is: " + this.name);
    }

    authentication(test) {
        if (this.#matchedpassword(test) === this.#password) {
            console.log("Login successfully!!");
            return true;
        } else {
            console.log("Invalid password");
            return false;
        }
    }

    get password() {
        return "Access is denied! Password is private.";
    }
}

const user = new MyAccount("John Doe", "mypassword", "johndoe123");

user.displayUsername(); 
console.log(user.authentication("mypassword")); 
console.log(user.authentication("wrongpassword")); 
console.log(user.password); 






