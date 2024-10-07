import IAuthor from "./IAuthor";
import { IBook } from "./IBook";
import { ICatalog } from "./ICatalog";
import { IMembers } from "./IMembers";
import IPublisher from "./IPublisher";
import { ITransection } from "./ITransection";


export default interface IContext {
   authors:IAuthor[],
   setauthors:(updateUthor:IAuthor)=>void,
   publisher:IPublisher[];
   setpublisher:(publisher:IPublisher[])=>void,
   books:IBook[],
   setbooks:(books:IBook[])=>void,
   members:IMembers[],
   setmembers:(members:IMembers[])=>void,
   login:boolean,
   setlogin:(login:boolean)=>void,
   catalog:ICatalog[],
   setcatalog:(catalog:ICatalog[])=>void,
   transections:ITransection[],
   setTransections:(transections:ITransection[])=>void

   
  }