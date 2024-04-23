export class Application {
    applicationId: number;
    contractId: number;
    nurseId: number;
    dateMade: string;
    accepted: boolean;
  
    constructor(
      applicationId: number,
      contractId: number,
      nurseId: number,
      dateMade: string,
      accepted: boolean
    ) {
      this.applicationId = applicationId;
      this.contractId = contractId;
      this.nurseId = nurseId;
      this.dateMade = dateMade;
      this.accepted = accepted;
    }
  }
  