const user={
    name:"Aakash",
    age:"22",
    email:"aakash@gmail.com",
    isActive:true
}

function createUser({name:string,isActive:boolean}){

}
createUser({name:"Aakash",isActive:true})


function createOscar({name:string,country}){
    return {}
}

createOscar({name:"Aakash",country:"India"});


function createUser1(user:User1):User1{
  return {name:"Aakash",age:22,email:"aakash2506c"}
}

type User1={
    name:string;
    age:Number;
    email:string;
}

type User2={
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditCardDetails?:number
}

type creditCardNo={
    creditcardno:string
}

type creditCardDate={
    creditcarddate:string
}

type creditCardDetails=creditCardDate & creditCardNo

let myUser:User2={
    _id:"12",
    name:"Aakash",
    email:"a@g",
    isActive:true

}

export {}
