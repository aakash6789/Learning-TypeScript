class User{
   private movie_count:number=1;
    
  constructor(public name:string,public email:string,private readonly country?:string){
  }

   get getName():string{
      return `${this.email}`
   }

   set movieCount(movie_count:number) {
            if(movie_count<1){
                throw new Error("Actor should have atleast one movie")
            }
               this.movie_count=movie_count;

   }
}

const bestActor2025=new User("Aakash","aakash2506c")
const bestActor2026=new User("Aakash","aakash2506c","India")


// export {}