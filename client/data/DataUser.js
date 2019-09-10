import User from '../models/UserSchema'

export const USERDATA = [
    new User (
        'id' = String,
        'userPhoto' = null,
        'firstName'= String,
        'surName' = String,
        'lastName' = String,
        'userName' = String,
        'mail' = String,
        'password' = String,
        'educativeInstitution' = String,
        'educationResearcher' = String,
        'collections'= String
    )
];