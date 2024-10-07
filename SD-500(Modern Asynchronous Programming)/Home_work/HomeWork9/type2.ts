import { channel } from "diagnostics_channel";

//data structure 2
// the item id is used as key, and the item title is the value
// add item (if id does not exist)
// update the item title (if id exist)
// delete item (if id exist)
// read title by id (if id exist)
type Data2 = { [id: string]: string; };
const data2: Data2 = {
    "1":"book1",
    "2":"book2",
};
function add_item(id:string,title:string):boolean{
    const find_id=data2.hasOwnProperty(id)
    if(find_id) return false
    data2[id]=title
    return true
}
function update_item(id:string,title:string):boolean{
    const find_id=data2.hasOwnProperty(id)
    if(!find_id) return false
    data2[id]=title
    return true

}
function delete_item(id:string):boolean{
    const find_id=data2.hasOwnProperty(id)
    if(!find_id) return false

    delete data2[id]
    return true
}
function read_title(id:string){
    const find_id=data2.hasOwnProperty(id)
  
    if(!find_id) return false
    
    return data2[id]
   

}



console.log(data2)
add_item("3","book3")
console.log("after add",data2)
update_item("3","book4")
console.log("after update",data2)
delete_item("3")
console.log("after delete",data2)
console.log(read_title("1"))


