class HeightEstimateSchema {
    constructor(
        burialCollection,
        burial,
        gender,
        radius,
        ulna,
        humerus,
        fibula,
        tibia,
        femur
    ){
        this.burialCollection = burialCollection,
        this.burial = burial,
        this.gender = gender,
        this.radius = radius,
        this.ulna = ulna,
        this.humerus = humerus,
        this.fibula = fibula,
        this.tibia = tibia,
        this.femur = femur  
    }
};

export default HeightEstimateSchema;