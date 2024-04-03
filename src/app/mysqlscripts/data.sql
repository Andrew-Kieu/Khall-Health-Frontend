-- Nurses table

INSERT INTO nurse (firstName, LastName, email, certifications, employment, licenses, degrees, dateOfBirth, professions)
VALUES ('Emily', 'Brown', 'emily.brown@example.com', 'RN, BLS, ACLS, PALS', 'Looking for Work', 'License456', 'Master of Science in Nursing', '1988-03-10', 'Registered Nurse');

-- Case 2: Inserting a nurse with different employment history
INSERT INTO nurse (firstName, LastName, email, certifications, employment, licenses, degrees, dateOfBirth, professions)
VALUES ('Michael', 'Clark', 'michael.clark@example.com', 'LPN, BLS', 'Clinic XYZ', 'License789', 'Associate Degree in Nursing', '1975-09-25', 'Licensed Practical Nurse');

-- Case 3: Inserting a nurse with multiple degrees
INSERT INTO nurse (firstName, LastName, email, certifications, employment, licenses, degrees, dateOfBirth, professions)
VALUES ('Samantha', 'Roberts', 'samantha.roberts@example.com', 'RN, BLS', 'Looking for Work', 'License321', 'Bachelor of Science in Nursing, Master of Science in Nursing', '1995-07-08', 'Registered Nurse');

-- Case 4: Inserting a nurse with no certifications
INSERT INTO nurse (firstName, LastName, email, certifications, employment, licenses, degrees, dateOfBirth, professions)
VALUES ('Christopher', 'Taylor', 'christopher.taylor@example.com', NULL, 'Nursing Home ABC', 'License654', 'Associate Degree in Nursing', '1983-12-18', 'Registered Nurse');

-- Case 5: Inserting a nurse with additional profession information
INSERT INTO nurse (firstName, LastName, email, certifications, employment, licenses, degrees, dateOfBirth, professions)
VALUES ('Jessica', 'Anderson', 'jessica.anderson@example.com', 'RN, BLS, ACLS', 'Hospital GHI', 'License987', 'Bachelor of Science in Nursing', '1991-11-30', 'Registered Nurse, Nurse Educator');



-- Hospital table

-- Case 1: Inserting a hospital with all required information
INSERT INTO hospital (hospitalName, hospitalAddress, email)
VALUES ('Saint Mary Hospital', '123 Main Street', 'info@saintmaryhospital.com');

-- Case 2: Inserting a hospital with a different name, address, and email
INSERT INTO hospital (hospitalName, hospitalAddress, email)
VALUES ('General Medical Center', '456 Elm Street', 'info@generalmedicalcenter.com');

-- Case 3: Inserting a hospital with another set of name, address, and email
INSERT INTO hospital (hospitalName, hospitalAddress, email)
VALUES ('City Hospital', '789 Oak Street', 'info@cityhospital.com');

-- Case 4: Inserting a hospital with another set of name, address, and email
INSERT INTO hospital (hospitalName, hospitalAddress, email)
VALUES ('Community Care Hospital', '101 Maple Street', 'info@communitycarehospital.com');

-- Case 5: Inserting a hospital with another set of name, address, and email
INSERT INTO hospital (hospitalName, hospitalAddress, email)
VALUES ('Unity Health Center', '202 Pine Street', 'info@unityhealthcenter.com');



-- contracts 

-- Case 1: Inserting a contract with all attributes specified
INSERT INTO contracts (contractDetails, hiringRequirements, expiration, hospitalID, pay, contractStatus)
VALUES ('Contract for nursing services for the emergency department.', 'RN license required, BLS certification preferred.', '2025-12-31', 1, 35.00, 'Active');

-- Case 2: Inserting a contract with all attributes specified
INSERT INTO contracts (contractDetails, hiringRequirements, expiration, hospitalID, pay, contractStatus)
VALUES ('Contract for nursing services for the surgical unit.', 'RN license required.', '2025-10-15', 2, 40.00, 'Active');

-- Case 3: Inserting a contract with all attributes specified
INSERT INTO contracts (contractDetails, hiringRequirements, expiration, hospitalID, pay, contractStatus)
VALUES ('Contract for nursing services for the pediatric ward.', 'RN license required, Pediatric certification preferred.', '2026-03-01', 3, 38.00, 'Active');

-- Case 4: Inserting a contract with all attributes specified
INSERT INTO contracts (contractDetails, hiringRequirements, expiration, hospitalID, pay, contractStatus)
VALUES ('Contract for nursing services for the maternity unit.', 'RN license and Labor and Delivery certification required.', '2025-09-30', 4, 45.00, 'Active');

-- Case 5: Inserting a contract with all attributes specified
INSERT INTO contracts (contractDetails, hiringRequirements, expiration, hospitalID, pay, contractStatus)
VALUES ('Contract for nursing services for the ICU.', 'RN license required, Critical Care certification preferred.', '2025-11-15', 5, 42.00, 'Active');

