export class cards{
    imagePath : string ; 
    num : string  ; 
    title : string; 

    constructor({imagePath , num , title} :{imagePath:string , num:string , title:string } ) {

        
        this.imagePath = imagePath ; 
        this.num = num; 
        this.title = title ; 

    }
}