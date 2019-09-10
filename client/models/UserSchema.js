class UserSchema {
    constructor(
        id,
        userPhoto,
        firstName,
        surName,
        lastName,
        userName,
        mail,
        password,
        educativeInstitution,
        educationResearcher,
        collections
    )
    {
        this.id = id,
        this.userPhoto = userPhoto,
        this.firstName = firstName,
        this.surName = surName,
        this.lastName = lastName,
        this.userName= userName,
        this.mail = mail,
        this.password = password,
        this.educativeInstitution = educativeInstitution,
        this.educationResearcher = educationResearcher,
        this.collections = collections
    };
};

    export default UserSchema;