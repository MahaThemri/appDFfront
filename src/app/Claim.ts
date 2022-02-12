import { Photos } from './Photos';
import { Contract } from "./Contract";

export class Claim {
    numClaim!: number;
    creationDate!: string;
    accidentDate!: string;
    status!: string;
    contract!: Contract;
    photo! : Photos;
    // numContract!: number;

  
    

}