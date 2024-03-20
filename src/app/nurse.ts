export class Nurse {

    //id: number;
    firstName: string;
    lastName: string;
    profession: string;
    specialty: string;
    licenses: string[];
    certifications: string[];
    degrees: string[];
    
      
    
    constructor(
    // id: number,
    firstName: string,
    lastName: string,
    profession: string,
    specialty: string,
    licenses: string[],
    certifications: string[],
    degrees: string[]
    
    ) {
    
    // this.id = id;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.specialty = specialty;
    this.licenses = licenses;
    this.certifications = certifications;   
    this.degrees = degrees;
    } 
    }
    