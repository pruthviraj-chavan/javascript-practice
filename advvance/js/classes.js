class Car {
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
}
let myoj = new Car()

class parent {
    hello(){
        console.log("hello")
    }
}

class child extends parent {
    work(){
        
        super.hello()
        console.log("work")
    }

}

let obj1 = new child()