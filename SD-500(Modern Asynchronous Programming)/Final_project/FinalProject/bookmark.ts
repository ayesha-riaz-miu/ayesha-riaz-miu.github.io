import { fetchAnimal } from "./api";
import { getAnimals, selectAnimalId, AnimalChoice } from "./animal";
import { Animal } from "./animal/types";
import { Animal1 } from "./animal/types2";
const prompts = require('prompts');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


class Bookmarks {
    static #instance: Bookmarks;
    private bookmarks: { [id: string]: string } = this.GetbookmarkFromLocalStorage();
    //we had to set the bookmark to the localstorage to get the updated version, we were facing much problems with this.

    static getInstance(): Bookmarks {
        // Ensure only one instance of Bookmarks exists
        if (!this.#instance) {
            this.#instance = new Bookmarks();
        }
        return this.#instance;
    }

    async savebookmarkToLocalStorage() {
        // Save bookmarks to localStorage
        localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
    }


    GetbookmarkFromLocalStorage(): { [id: string]: string } {
        try {
            const savedBookmarks = localStorage.getItem("bookmarks");
            return savedBookmarks ? JSON.parse(savedBookmarks) : {};
            //if it exists get the parsed value if not return an empty object
        } catch (error) {
            return {};
        }
    }

    async getAnimalsAndGetDetails() {
        const animals: Animal[] | undefined = await getAnimals();
        //grabs the animal array retrived from getAnimals function (animal index.ts)
        const options: AnimalChoice[] | undefined = animals?.map((a) => ({ title: a.name, value: a.id }));
        //mapping to name and id 
        const selectedAnimalId: number = await selectAnimalId(options);
        //retriving selected animal id

        const details: Animal1 | undefined = await fetchAnimal(selectedAnimalId);
        //fetching animal by passing the id
        // Additional prompts
        const prompt: string | undefined = await this.Prompt();
        const petName: string = details?.name ||"";

        this.RetrievedPrompt(prompt, selectedAnimalId, petName);
    }

    async Prompt() {
        const options = [
            {
                type: 'select', name: 'prompt', message: 'Choose your action', choices: [
                    { title: 'Add to bookmark', value: "add" },
                    { title: 'Remove from bookmark', value: "remove" },
                    { title: 'Display bookmark', value: "display" },
                    { title: 'Search again', value: "search" },
                ]
            },
        ];

        const response = await prompts(options) as { prompt: string };
        //storing value in response the as is used to show the expected value
        return response.prompt;
        //returning the prompt values
        //go back to the function that called you
    }

    // RetrievedPrompt(prompt: string, petId: number, petName: string) {
    //     if (prompt === "add") {
    //         this.addBookmark(petId, petName);
    //     } else if (prompt === "remove") {
    //         this.removeBookmark(petId);} 
    //         else if (prompt === "display") {
    //         this.displayBookmarks();
    //     } else if (prompt === "search") {
    //         this.Prompt();
    //     } else {
    //         console.log('Nothing to view');
    //     }
    // }

     RetrievedPrompt(prompt: string, petId: number, petName: string) {
        if (prompt === "add") {
            this.addBookmark(petId, petName);
        } else if (prompt === "remove") {
            this.removeBookmark(petId);} 
            else if (prompt === "display") {
            this.displayBookmarks();
        } else if (prompt === "search") {
            this.Prompt();
        } else {
            console.log('Nothing to view');
        }
    }

    addBookmark(petId: number, petName: string) {
        if (!this.bookmarks[petId]) {
            this.bookmarks[petId] = petName;
            // Check if the petId does not exist in the bookmarks object
            //If the petId does not exist, adds an entry to the bookmarks object with petId as the key and petName as the value.
            this.savebookmarkToLocalStorage();
            console.log(`Added ${petName} to BM`);
        } else {
            console.log(`${petName} is already in BM`);
        }
     
    }

    removeBookmark(petId: number) {
        if (this.bookmarks[petId]) {
            const petName = this.bookmarks[petId];
            //Retrieves the name associated with the given petId
            delete this.bookmarks[petId];
            //delete that entry
            this.savebookmarkToLocalStorage();
            console.log(`Removed ${petName} from BM`);
        } else {
            console.log("Pet not found in BM");
        }
    }
  
   

    displayBookmarks() {
        console.log("Bookmark:");
        for (const [id, name] of Object.entries(this.bookmarks)) {
            console.log(`Name: ${name} , ID: ${id}`);
        }
    }
    accesbookma(){
        return this.bookmarks
    }

}



let newBookmark = Bookmarks.getInstance()
newBookmark.getAnimalsAndGetDetails()

function retrivedata(){
    const data=newBookmark.accesbookma()
}

// function adddelete(prompt:string,petId:number,petname:string){
//     if(prompt=="add"){
//         if(!this.bookmark[petId]){
//             this.bookmark[petId]=petname
//             this.savebookmarkToLocalStorage()
//             console.log(`save ${petname}`)
//         }
//         else {
//             console.log('aleady added')
//         }

//     }
//     else if(prompt=="romove"){
//         const petname=this.bookmark[petId]
//         if(this.bookmark[petId]){
//             delete this.bookmark[petId]
//             this.savebookmarkToLocalStorage()
//             console.log(`delet ${petname}`)
//         }
        
       
//     }

// }