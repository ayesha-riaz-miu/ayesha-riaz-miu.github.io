import { channel } from "diagnostics_channel";

// data structure 3
// the item id is used as key, and the item value is an object that contains the title
// add item (if id does not exist)
// update title (if id exist)
// delete item (if id exist)
// read title by id (if id exist)
type Data3 = { [id: string]: { title: string; }; };
const data3: Data3 = {
    "1":{title:"book1"},
    "2":{title:"book2"}
};
function add_item(id:string,new_data:string):boolean{

    const find_id=data3.hasOwnProperty(id)
    if(find_id) return false

    data3[id]={title:new_data}
    return true
}
function update_item(id:string,update_title:string):Promise<boolean>{
    return new Promise<boolean>(function(resolved,rejected){
        const find_id=data3.hasOwnProperty(id)
        if(!find_id) rejected(false) 
        data3[id]={title:update_title}
      resolved (true)
    })

    
}
function delete_item(id:string){
    const find_id=data3.hasOwnProperty(id)
    if(!find_id) return false

    delete data3[id]
    return true
}
function read_title(id:string){
    const find_id=data3.hasOwnProperty(id)
    if(!find_id) return false

    return data3[id].title

}
console.log(data3)
add_item("3","book3")
console.log("after add",data3)
update_item("3","book3 & book4")
.then(console.log)
.catch(console.error)
console.log("after update",data3)
delete_item("3")
console.log("after delete",data3)
console.log(read_title("2"))