export default interface BookType{
    id:number|string;
    title:string;
    genre:string,
    isbn:string,
    format:string,
    authors?:number[],
    catalog?:{
        numberOfCopies:number,
        availableCopies:number
    }


}
