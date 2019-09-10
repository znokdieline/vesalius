import Remain from '../models/RemainsSchema';
import Skull from '../models/SkullSchema';
import Heigh from '../models/HeightEstimateSchema';

export const DATAREMAINS = [
    new Remain(
        'id' = String,
        'burialCollection' = String,
        'burial' = String,
        'number' = String,
        'classOf' = String,
        'kind' = String,
        'shape' = String,
        'variety' = String,
        'orientation' = String,
        'location' = String,
        'description' = String
    )
];

export const SKULLESTIMATE = [
    new Skull(
        'id' = String,
        'burialCollection' = 'burialCollection',
        'burial' = 'burial',
        'nuchalCrest' = Number,
        'mastoidProcess' = Number,
        'supraOrbitalMargin' = Number,
        'supraOrbitalGlabella' = Number,
        'mentalEminence' = Number,
        'description' = String
    )
];

export const HEIGERESTIMATE = [
    new Heigh(
        'id'= String,
        'burialCollection' = 'burialCollection',
        'burial' = 'burial',
        'gender' = 'gender',
        'radius' = Number,
        'ulna' = Number,
        'humerus' = Number,
        'fibula' = Number,
        'tibia' = Number,
        'femur' = Number
    ) 
]