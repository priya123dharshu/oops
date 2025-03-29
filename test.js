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

const user = new MyAccount("priya", "test@123", "dharshu");

user.displayUsername(); 
console.log(user.authentication("mypassword")); 
console.log(user.authentication("wrongpassword")); 
console.log(user.password); 