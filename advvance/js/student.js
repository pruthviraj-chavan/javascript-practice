let data = "hello"
let namee = prompt("Enter your name:");
let email = prompt("Enter your email:");

class student{
    constructor(namee, email){
        this.namee = namee
        this.email = email
    }

    viewdata(){
        console.log("name",this.email) 
        console.log("name",this.namee)
        console.log("this is  ", data)
    }
}

class admin extends student{
    constructor(namee, email){
        super(namee,email)
    }
    editdata(){
        let data = "brother"
        console.log(data)
    }
}

let student1  = new student(namee, email)
student1.viewdata()
let admin1 = new admin("samnds","skjfb")
admin1.editdata()

