CREATE table nurse(
    profileID int Identity(1,1),
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    email VARCHAR(30),
    certifcations text,
    employment text,
    licenseses text,
    degrees text,
    dateOfBirth date,
    professions VARCHAR(50),
    CONSTRAINT nurse_PK PRIMARY KEY (profileID)
);


CREATE table hospital(
    hosptialID int Identity(1,1),
    hospitalName VARCHAR(50),
    hospitalAddress VARCHAR(50),
    email VARCHAR(30),
    contracts int, 
    topReviews text,
    CONSTRAINT hopsital_PK PRIMARY key (hosptialID)
);

CREATE table contract(
    contractID int Identity(1,1),
    contractDetails text,
    hiringRequirements text,
    expiration date,
    hosptialID int,
    pay decimal(10,2),
    contractStatus text,
    CONSTRAINT contract_PK PRIMARY KEY (contractID),
    CONSTRAINT contract_FK FOREIGN KEY (hosptialID)
        REFERENCES hospital(hosptialID)
);

CREATE table application(
    applicationID int Identity(1,1),
    appStatus text,
    profileID int NOT NULL,
    contractID int NOT NULL
    CONSTRAINT application_PK PRIMARY key (applicationID),
    CONSTRAINT nurse_FK FOREIGN KEY (profileID)
        References nurse(profileID),
    CONSTRAINT contract_FK FOREIGN KEY (contractID)
        REFERENCES contract(contractID)
);

