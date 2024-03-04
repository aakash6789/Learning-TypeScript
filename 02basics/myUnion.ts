let passportNo:number|string=344512;

type User={
    name:string,
    id:number
}

type Admin={
    username:string,
    id:number
}

let Aakash:User|Admin;

function getDbId(id:number|string){
    if(typeof id==='string') {
        id.toLowerCase();
    }else{
        id.toString()
    }
}

// const data1 :Array<number|string>=["2"];
// const data1 :number[]|string[]=["2"];
const data1 :(number|string)[]=["2"];