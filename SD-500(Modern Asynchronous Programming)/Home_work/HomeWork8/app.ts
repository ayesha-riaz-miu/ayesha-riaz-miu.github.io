import fetch, { Response } from 'cross-fetch'

type userdata = {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string

}


const prompts = require('prompts');

async function getNumber() {
  const response = await prompts({
    type: 'number',
    name: 'user_id',
    message: 'Enter the id',
    validate: (value: number) => (value >= 1 && value <= 10) ? true : `id is not between 1-10`,
  });

  return response.user_id
}

async function usingId(user_id: object) {
  const checkresponse: Response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)


  const jsonresult: userdata = await checkresponse.json()

  console.log("Name:",jsonresult.name)
  console.log("PhoneNumber:",jsonresult.phone)
  console.log("E-mail:",jsonresult.email)
}

async function main(){

  const userId = await getNumber();
  await usingId(userId);

}

main()
