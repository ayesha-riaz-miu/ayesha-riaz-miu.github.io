import { channel } from "diagnostics_channel";

type Item = { 
    id: string, 
    title: string; 
};

// data structure 1
// add item (if id does not exist)
// update the title (if id exist)
// delete the item (if id exist)
// read title by id (if id exist)

let data1: Item[] = [{id:"1",title:"chapter1"},
                     {id:"2",title:"chapter2"}];

  function add_item(addstudent:Item):boolean{

    const find_id=data1.find(item=>item.id==addstudent.id)
    if(find_id) return false
    data1.push(addstudent)
    return true
  } 
  function update_title(id:string,update_title:string):boolean{
    const find_index=data1.findIndex(item=>item.id==id)
    if(!find_index) return false
    data1[find_index].title=update_title
    return true
  }
  function delete_item(id:string):boolean{

    const find_index=data1.findIndex(item=>item.id==id)
    if(!find_index) return false
    data1.splice(find_index,1)
    return true
  }
  function read_title(id:string){
    const find_index=data1.findIndex(item=>item.id==id)
    if(!find_index) return false
    return data1[find_index].title

  }

  console.log(data1) 
  add_item( {id:"3",title:"chapter3"})  
  console.log("after add",data1) 
  update_title("3","chapter3 & 4") 
  console.log("after update",data1)
  delete_item("3")
  console.log("after delete",data1)
  console.log(read_title("2"))




