class SkullSchema{
    constructor(
        id,
        burialCollection,
        burial,
        nuchalCrest,
        mastoidProcess,
        supraOrbitalMargin,
        supraOrbitalGlabella,
        mentalEminence,
        description
    ){
        this.id = id,
        this.burialCollection = burialCollection,
        this.burial = burial,
        this.nuchalCrest = nuchalCrest,
        this.mastoidProcess = mastoidProcess,
        this.supraOrbitalMargin = supraOrbitalMargin,
        this.supraOrbitalGlabella = supraOrbitalGlabella,
        this.mentalEminence = mentalEminence
        this.description = description
    };
};

export default SkullSchema;