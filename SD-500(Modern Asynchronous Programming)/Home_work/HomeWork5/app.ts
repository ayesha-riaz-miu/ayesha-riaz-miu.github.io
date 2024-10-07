
import { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./scratch');



interface State<T> { data: Array<{ [key: string]: T; }>; }
const state = {
    data: []
}

class MyStorage<T>{
    private state: State<T> = Object.freeze({ data: [] });

    addItem(key: string, value: T) {
        let new_value = { [key]: value }

        this.state = Object.freeze({ data: [...this.state.data, { [key]: value }] })
        //console.log(this.state)

    }
    getStorage() {
        console.log(this.state)
    }
    removeItem(key: string) {
        

        const newData = this.state.data.filter((item) => !item.hasOwnProperty[key]);
        this.state = Object.freeze({ data: newData });
        return true;

    }

    updateItem(key:string,value:T){
        let upadte_item={[key]:value}
        let update=this.state.data.map(item=>!item.hasOwnProperty[key]?{[key]:value}:item)

        this.state=Object.freeze({ data: update })
        return true
      
    }
    getItem(key: string): T | null {  
        const exit_item=this.state.data.find(item=>item.hasOwnProperty(key))
       return exit_item ? exit_item[key]:null

    }
    // console.log(storage.getItem('firstname'));
}


class PersistedStorage<T> extends MyStorage<T>{
    constructor(){
        super()
        const state=localStorage.getItem('state');
        if(state){
            const data_array=JSON.parse(state) as Array<{[key:string]:T;}>
           data_array.forEach(obj=>{
            const[item]=Object.entries(obj);
            this.addItem(item[0],item[1])
           });

        }
    }
    addPersistedItem(key: string, value: T): boolean { 
        const result = this.addItem(key, value);
        if(result){
            localStorage.setItem('state',JSON.stringify(this.getItem))
            return true
        }
        else {
            return false
        }
    }
    updateitemPersistedItem(key: string, value: T): boolean { 
        const result = this.updateItem(key, value);
        if(result){
            localStorage.setItem('state',JSON.stringify(this.getItem))
            return true
        }
        else {
            return false
        }
    }
    removeItemPersistedItem(key: string): boolean { 
        const result = this.removeItem(key);
        if(result){
            localStorage.setItem('state',JSON.stringify(this.getItem))
            return true
        }
        else {
            return false
        }
    }

}
const persisted=new PersistedStorage<string>()
persisted.addPersistedItem("firstname","ayesha")
persisted.addPersistedItem("lastname","riaz")
persisted.updateitemPersistedItem("firstname","saba")
persisted.removeItemPersistedItem("firstname")

