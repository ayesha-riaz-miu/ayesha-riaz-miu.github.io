### SD540-Workshop-02-User-SignUp-SignIn

The application has a DB collection for users to sign-up and sign-in. The collection has the following structure:
```typescript
const sample_data = {
    fullname: { first: "Asaad", last: "Saad" },
    email: "asaad@miu.edu",
    hashed_password: "",
    hashed_temp_password: "",
    temp_password_expiration_timestamp: 0
};
```
The email and hashed_password are required, and user's email is unique.
  
Passwords must be hashed, you will need to use [bcrypt](https://www.npmjs.com/package/bcrypt) to hash and compare hashes. The package provides the following two methods:
```typescript
bcrypt.hash(plain_password: string, salt_rounds: number): Promise<string> // use salt_rounds = 10
bcrypt.compare(plain_password: string, hashed_password: string): Promise<boolean>
```
The reset password workflow:
* The user sends his email to reset his password.
* The system creates a temp password and send it to the user.
* The system hashes the temp password, save the hashed temp password in db, and creates a timestamp that expires in 24 hours.
* The user sends his email, temp password, and new password.
* The system check if the temp password matches the hashed temp password and it has not expired yet, if all is okay, the system saves a hashed version of the new password and removes the temp password fields.
  
### Create the following functions:
1. `sign_up(email: string, plain_password: string, firstname?: string, lastname?: string): objectId` you will need to hash the password, save the user details in db, and return the user generated `ObjectId`.
2. `sign_in(email: string, plain_password: string): boolean` compare the plain password with the hashed password and return true/false
3. `create_temp_password(email: string): void` generate a new temporaty password using [Random String](https://www.npmjs.com/package/randomstring) package, hash the temp password and save it in db along with an expiration unix timestamp of 24 hours `Date.now() + 86400`, and [send the user an email](https://www.npmjs.com/package/@sendgrid/mail) with the temporary plain password.
4. `reset_password(email: string, temp_password: string, new_password: string): boolean`, check if the temp password match with the hased temp password and check if it has not expired, if all okay, hash the new password and save it in the db, and remove the temp password and expiration timestamp fields (use [$unset](https://www.mongodb.com/docs/manual/reference/operator/update/unset/) operator). Return a boolean confirmation if the reset flow was successful or not.
  
Note: Make sure you implement error handling for potential issues.
