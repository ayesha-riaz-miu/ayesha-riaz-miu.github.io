import User from "."

export default interface userTypes{
    isFirst:boolean,
    isLoading:boolean,
    isError:boolean,
    user:User[]
}