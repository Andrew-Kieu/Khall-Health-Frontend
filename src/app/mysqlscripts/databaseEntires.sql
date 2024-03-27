CREATE table nurse(
    profileID int Identity(1,1),
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    email VARCHAR(30),
    certifications text,
    employment text,
    licenses text,
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

CREATE table contracts(
    contractID int Identity(1,1),
    contractDetails text,
    hiringRequirements text,
    expiration date,
    hosptialID int,
    pay decimal(10,2),
    contractStatus text,
    CONSTRAINT contract_PK PRIMARY KEY (contractID),
    CONSTRAINT hosptial_FK FOREIGN KEY (hosptialID)
        REFERENCES hospital(hosptialID)
);

CREATE table applications(
    applicationID int Identity(1,1),
    appStatus text,
    profileID int NOT NULL,
    contractID int NOT NULL
    CONSTRAINT application_PK PRIMARY key (applicationID),
    CONSTRAINT nurse_FK FOREIGN KEY (profileID)
        References nurse(profileID),
    CONSTRAINT contracts_FK FOREIGN KEY (contractID)
        REFERENCES contracts(contractID)
);

