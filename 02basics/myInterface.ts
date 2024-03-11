interface User {
    readonly dbId:number,
    email: string,
    userId: number,
    googleId?:string,
    // startTrial:()=> string
    startTrial():string
    getCoupon(CuponName:string): number
}

interface User {
    phoneNo?:Number
}

interface Admin extends User{
    role:"Admin"|"ta"|"Manager"
}

const mabs: User ={ dbId:23,email:"mabs@gmail.com",userId:25,startTrial: ()=> {return "free version started"},getCoupon:(name:"FIRST20")=> { return 25}};
const crabs: Admin ={ role:"Admin",dbId:23,email:"mabs@gmail.com",userId:25,startTrial: ()=> {return "free version started"},getCoupon:(name:"FIRST20")=> { return 25}};

export {}