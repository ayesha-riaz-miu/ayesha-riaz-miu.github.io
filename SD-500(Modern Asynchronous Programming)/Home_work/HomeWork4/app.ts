
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
}

const storage = new MyStorage<string>();
storage.addItem("firstname", "Asaad");
storage.addItem("lastname", "Saad");

console.log(storage.getStorage());

storage.removeItem("lastname");
console.log(storage.getStorage());

storage.updateItem("firstname", "Theo");
console.log(storage.getStorage()); 



