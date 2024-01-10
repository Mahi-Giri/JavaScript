let data = "Secret Info";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", data);
    }
};

const student1 = new User("abc", "abc@gmail.com");
const student2 = new User("xyz", "xyz@gmail.com");
const teacher1 = new User("Dean", "dean@gmail.com");

student1.viewData();
student2.viewData();
teacher1.viewData();

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "Changed Data";
    }
};

const admin1 = new Admin("Admin","admin@college.com");

admin1.editData();
data