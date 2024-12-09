CREATE TABLE USERINFO (
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    ID VARCHAR(10) NOT NULL,
    Type VARCHAR(20) NOT NULL, 
    PRIMARY KEY (Username, Password)
);


CREATE TABLE Patient (
    Patient_ID VARCHAR(10) 			PRIMARY KEY,
    Fname VARCHAR(50),
    Mname VARCHAR(50),
    Lname VARCHAR(50),
    Phone_number CHAR(10),
    Gender CHAR(1),					CHECK (Gender IN ('M', 'F')),
    Age INT 						CHECK (Age >= 0),
    "Weight(kg)" DECIMAL(5, 2) 	CHECK ("Weight(kg)" >= 0),
    "Height(m)" DECIMAL(5, 2) 		CHECK ("Height(m)" >= 0),
	
	CONSTRAINT check_patient_id_format CHECK (Patient_ID ~ '^((OP|IP)[0-9]{6})$'),
	CONSTRAINT check_phone_number_patient CHECK (Phone_number ~ '^0[0-9]{9}$')
);


CREATE OR REPLACE FUNCTION insert_patient_into_in_out_patient()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.Patient_ID LIKE 'IP%' THEN
        INSERT INTO Inpatient (Inpatient_ID) VALUES (NEW.Patient_ID);
    ELSIF NEW.Patient_ID LIKE 'OP%' THEN
        INSERT INTO Outpatient (Outpatient_ID) VALUES (NEW.Patient_ID);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER after_insert_patient
AFTER INSERT ON Patient
FOR EACH ROW
EXECUTE FUNCTION insert_patient_into_in_out_patient();


CREATE TABLE Dependent (
    Fname VARCHAR(50),
    Mname VARCHAR(50),
    Lname VARCHAR(50),
    Phone_number CHAR(10),
    Patient_ID VARCHAR(10),
	
    PRIMARY KEY (Fname, Mname, Lname, Patient_ID),
    FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID)
	ON DELETE CASCADE,

	CONSTRAINT check_phone_number_dependent CHECK (Phone_number ~ '^0[0-9]{9}$')
);

CREATE TABLE Inpatient (
    Inpatient_ID VARCHAR(10) 		PRIMARY KEY,
	
    FOREIGN KEY (Inpatient_ID) REFERENCES Patient(Patient_ID)
	ON DELETE CASCADE
);

CREATE TABLE Outpatient (
    Outpatient_ID VARCHAR(10) 		PRIMARY KEY,
	
    FOREIGN KEY (Outpatient_ID) REFERENCES Patient(Patient_ID)
	ON DELETE CASCADE
);

CREATE TABLE Employee (
    Employee_ID VARCHAR(10) 			PRIMARY KEY,
    Fname VARCHAR(50),
    Mname VARCHAR(50),
    Lname VARCHAR(50),
    Age INT 						CHECK (Age >= 0),
    "Fixed_Salary(VND)" DECIMAL(10, 2) CHECK ("Fixed_Salary(VND)" >= 0),
	"Bonus(VND)" DECIMAL(10, 2)			CHECK ("Bonus(VND)" >= 0),
    Gender CHAR(1) 						CHECK (Gender IN ('M', 'F')),
    Phone_number CHAR(10),
    Experience_year INT 				CHECK (Experience_year >= 0),
    Working_hour INT 					CHECK (Working_hour >= 0),

	CONSTRAINT check_employee_id_format CHECK (Employee_ID ~ '^(NU|DO|OT)[0-9]{4}$'),
	CONSTRAINT check_phone_number_employee CHECK (Phone_number ~ '^0[0-9]{9}$')
);

CREATE OR REPLACE FUNCTION calculate_salary_bonus()
RETURNS TRIGGER AS $$
BEGIN
	IF NEW.Employee_ID LIKE 'DO%' THEN
	    IF NEW.Experience_year < 1 THEN
	        NEW."Fixed_Salary(VND)" := 5000000;
	    ELSIF NEW.Experience_year BETWEEN 1 AND 3 THEN
	        NEW."Fixed_Salary(VND)" := 10000000;
		ELSIF NEW.Experience_year BETWEEN 3 AND 5 THEN
	        NEW."Fixed_Salary(VND)" := 15000000;	
	    ELSE
	        NEW."Fixed_Salary(VND)" := 25000000; 
	    END IF;
	END IF;

	IF NEW.Employee_ID LIKE 'NU%' THEN
	    IF NEW.Experience_year < 1 THEN
	        NEW."Fixed_Salary(VND)" := 2000000;
	    ELSIF NEW.Experience_year BETWEEN 1 AND 3 THEN
	        NEW."Fixed_Salary(VND)" := 5000000;
		ELSIF NEW.Experience_year BETWEEN 3 AND 5 THEN
	        NEW."Fixed_Salary(VND)" := 8000000;	
	    ELSE
	        NEW."Fixed_Salary(VND)" := 12000000; 
	    END IF;
	END IF;

	IF NEW.Employee_ID LIKE 'OT%' THEN
	    IF NEW.Experience_year < 5 THEN
	        NEW."Fixed_Salary(VND)" := 5000000;
	    ELSE
	        NEW."Fixed_Salary(VND)" := 10000000; 
	    END IF;
	END IF;

	IF NEW.Working_hour > 260 THEN
		IF NEW.Employee_ID LIKE 'DO%' THEN
	        NEW."Bonus(VND)" := NEW."Fixed_Salary(VND)" * 0.25;
	    ELSEIF NEW.Employee_ID LIKE 'NU%' THEN
	        NEW."Bonus(VND)" := NEW."Fixed_Salary(VND)" * 0.15;
		ELSE 
			NEW."Bonus(VND)" := NEW."Fixed_Salary(VND)" * 0.15;
	    END IF;
	END IF;
		
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_calculate_salary_bonus
BEFORE INSERT OR UPDATE ON Employee
FOR EACH ROW
EXECUTE FUNCTION calculate_salary_bonus();


CREATE TABLE Doctor (
    Doctor_ID VARCHAR(10) 			PRIMARY KEY,
	
    FOREIGN KEY (Doctor_ID) REFERENCES Employee(Employee_ID)
	ON DELETE CASCADE
);

CREATE TABLE Nurse (
    Nurse_ID VARCHAR(10) 			PRIMARY KEY,
	
    FOREIGN KEY (Nurse_ID) REFERENCES Employee(Employee_ID)
	ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION insert_employee_into_doctor_nurse()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.Employee_ID LIKE 'DO%' THEN
        INSERT INTO DOCTOR (DOCTOR_ID) VALUES (NEW.EMPLOYEE_ID);
    ELSIF NEW.EMPLOYEE_ID LIKE 'NU%' THEN
        INSERT INTO NURSE (NURSE_ID) VALUES (NEW.EMPLOYEE_ID);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER after_insert_employee
AFTER INSERT ON employee
FOR EACH ROW
EXECUTE FUNCTION insert_employee_into_doctor_nurse();

CREATE TABLE Department (
    Name CHAR(1) 					PRIMARY KEY

	CONSTRAINT check_Name_Dep CHECK (Name ~ '^[A-Z]$')
);

CREATE OR REPLACE FUNCTION insert_default_room()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO Room (Number, Dep_Name) VALUES ('101', NEW.Name);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER after_insert_department
AFTER INSERT ON Department
FOR EACH ROW
EXECUTE FUNCTION insert_default_room();

CREATE TABLE Room (
    Number VARCHAR(3) 				CHECK (Number ~ '^[1-9]0[1-9]$'),
    Dep_Name CHAR(1),
	
    PRIMARY KEY (Number, Dep_Name),
    FOREIGN KEY (Dep_Name) REFERENCES Department(Name)
	ON DELETE CASCADE
);

CREATE TABLE Medication (
    Medication_ID VARCHAR(10) 		PRIMARY KEY,
    Medication_Name VARCHAR(20),					
	"Price(VND)" DECIMAL(10, 2), 	CHECK ("Price(VND)" >= 0),
	Effect VARCHAR(20),
	Expired_Date DATE,
	Patient_ID VARCHAR(10),
    "Usage" JsonB,
	
    FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID) 
	ON DELETE CASCADE,
	
	CONSTRAINT check_medication_name CHECK (Medication_Name IN (
        'Albuterol', 'Salmeterol', 'Lisinopril', 'Amlodipine', 'Omeprazole', 'Esomeprazole', 
        'Insulin glargine', 'Levothyroxine', 'Sertraline', 'Lorazepam', 'Warfarin', 
        'Ferrous sulfate', 'Sofosbuvir', 'Silymarin', 'Furosemide', 'Doxorubicin', 
        'Trastuzumab', 'Fluticasone', 'Azithromycin', 'Ibuprofen', 'Methotrexate')),
	CONSTRAINT check_medication_ID CHECK (Medication_ID ~* '^([A-Z]{3}[0-9]{7})$'),
	CONSTRAINT check_effect CHECK (Effect IN ('Pain Relief', 'Antipyretic', 'Anti-inflammatory', 'Antibiotic', 'Antiviral')),
	CONSTRAINT check_expired_date CHECK (
        EXTRACT(YEAR FROM Expired_Date) BETWEEN 2024 AND 2029 AND 
        Expired_Date > CURRENT_DATE + INTERVAL '6 months'  
    )
);

CREATE OR REPLACE FUNCTION generate_medication_id()
RETURNS TRIGGER AS $$
BEGIN
    NEW.Medication_ID := UPPER(SUBSTRING(NEW.Medication_Name FROM 1 FOR 3)) || 
                         LPAD(NEW.Medication_ID, 7, '0'); 
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_generate_medication_id
BEFORE INSERT ON Medication
FOR EACH ROW EXECUTE FUNCTION generate_medication_id();

CREATE OR REPLACE FUNCTION set_default_usage()
RETURNS TRIGGER AS $$
BEGIN
    CASE NEW.Medication_Name
            WHEN 'Albuterol' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "before meal" },
                        "afternoon": { "amount": 100, "unit": "ml", "take": "before meal"}
                    },
                    "SIDE_EFFECTS": ["dizziness", "nausea", "headache"]
                }'::jsonb;

            WHEN 'Salmeterol' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "inhalation", "take": "before meal" },
                        "noon": { "amount": 1, "unit": "inhalation", "take": "after meal" }
                    },
                    "SIDE_EFFECTS": ["tremors", "palpitations"]
                }'::jsonb;

            WHEN 'Lisinopril' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "with meal" }
                    },
                    "SIDE_EFFECTS": ["cough", "dizziness"]
                }'::jsonb;

            WHEN 'Amlodipine' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "any time" }
                    },
                    "SIDE_EFFECTS": ["swelling", "flushing"]
                }'::jsonb;

            WHEN 'Omeprazole' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "before breakfast" }
                    },
                    "SIDE_EFFECTS": ["stomach pain", "nausea"]
                }'::jsonb;

            WHEN 'Esomeprazole' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "before breakfast" }
                    },
                    "SIDE_EFFECTS": ["stomach pain", "diarrhea"]
                }'::jsonb;

            WHEN 'Insulin glargine' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "night": { "amount": 10, "unit": "units", "take": "at bedtime" }
                    },
                    "SIDE_EFFECTS": ["low blood sugar", "weight gain"]
                }'::jsonb;

            WHEN 'Levothyroxine' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "on an empty stomach" }
                    },
                    "SIDE_EFFECTS": ["heart palpitations", "weight loss"]
                }'::jsonb;

            WHEN 'Sertraline' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "with or without food" }
                    },
                    "SIDE_EFFECTS": ["nausea", "sleep disturbances"]
                }'::jsonb;

            WHEN 'Lorazepam' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "night": { "amount": 1, "unit": "pill", "take": "before sleep" }
                    },
                    "SIDE_EFFECTS": ["drowsiness", "dizziness"]
                }'::jsonb;

            WHEN 'Warfarin' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "evening": { "amount": 1, "unit": "pill", "take": "at the same time every day" }
                    },
                    "SIDE_EFFECTS": ["bleeding", "bruising"]
                }'::jsonb;

            WHEN 'Ferrous sulfate' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "on an empty stomach" }
                    },
                    "SIDE_EFFECTS": ["constipation", "nausea"]
                }'::jsonb;

            WHEN 'Sofosbuvir' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "with food" }
                    },
                    "SIDE_EFFECTS": ["fatigue", "headache"]
                }'::jsonb;

            WHEN 'Silymarin' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "with meal" }
                    },
                    "SIDE_EFFECTS": ["diarrhea", "upset stomach"]
                }'::jsonb;

            WHEN 'Furosemide' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "with food" }
                    },
                    "SIDE_EFFECTS": ["increased urination", "dizziness"]
                }'::jsonb;

            WHEN 'Doxorubicin' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "afternoon": { "amount": 1, "unit": "injection", "take": "as prescribed" }
                    },
                    "SIDE_EFFECTS": ["nausea", "hair loss"]
                }'::jsonb;

            WHEN 'Trastuzumab' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "afternoon": { "amount": 1, "unit": "injection", "take": "as prescribed" }
                    },
                    "SIDE_EFFECTS": ["nausea", "fever"]
                }'::jsonb;

            WHEN 'Fluticasone' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 2, "unit": "sprays", "take": "in each nostril" }
                    },
                    "SIDE_EFFECTS": ["nasal irritation", "nosebleeds"]
                }'::jsonb;

            WHEN 'Azithromycin' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "with or without food" }
                    },
                    "SIDE_EFFECTS": ["nausea", "diarrhea"]
                }'::jsonb;

            WHEN 'Ibuprofen' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "morning": { "amount": 1, "unit": "pill", "take": "with food" },
                        "night": { "amount": 1, "unit": "pill", "take": "as needed" }
                    },
                    "SIDE_EFFECTS": ["stomach upset", "dizziness"]
                }'::jsonb;

            WHEN 'Methotrexate' THEN
                NEW."Usage" := '{
                    "TIME_IN_THE_DAY": {
                        "afternoon": { "amount": 1, "unit": "pill", "take": "as prescribed" }
                    },
                    "SIDE_EFFECTS": ["nausea", "mouth sores"]
                }'::jsonb;

            ELSE
                NEW."Usage" := NULL; -- Default case if medication is not recognized
        END CASE;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE or replace TRIGGER before_insert_set_usage
before INSERT ON Medication
FOR EACH ROW
EXECUTE FUNCTION set_default_usage();




CREATE TABLE Bill (
    Bill_ID VARCHAR(12) 					PRIMARY KEY,					
	"Total_price(VND)" DECIMAL(10, 2), 	CHECK ("Total_price(VND)">= 0),
	Date DATE,
    Customer_ID VARCHAR(10),

	FOREIGN KEY (Customer_ID) REFERENCES Patient(Patient_ID)
	ON DELETE CASCADE,
	
	CONSTRAINT check_date CHECK (
        EXTRACT(YEAR FROM Date) >= 2015 AND 
        EXTRACT(YEAR FROM Date) <= EXTRACT(YEAR FROM CURRENT_DATE)
    ),
	 CONSTRAINT check_bill_id_digits CHECK ( 
        LENGTH(SUBSTRING(Bill_ID FROM 9 FOR 4)) = 4 AND
        SUBSTRING(Bill_ID FROM 9 FOR 4) ~ '^[0-9]{4}$'
    )
);

CREATE OR REPLACE FUNCTION generate_bill_id()
RETURNS TRIGGER AS $$
BEGIN
    NEW.Bill_ID := SUBSTRING(NEW.Customer_ID FROM 1 FOR 8) || 
                   LPAD(NEW.Bill_ID::TEXT, 4, '0'); 
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_generate_bill_id
BEFORE INSERT ON Bill
FOR EACH ROW EXECUTE FUNCTION generate_bill_id();


CREATE TABLE Specialties (
    Doctor_ID CHAR(10),
	Specialty CHAR(20), 

	PRIMARY KEY (Doctor_ID, Specialty),
	FOREIGN KEY (Doctor_ID) REFERENCES Employee(Employee_ID)
	ON DELETE CASCADE,
	
	CONSTRAINT check_doctor_id_specialty_format CHECK (Doctor_ID LIKE 'DO%'),
	CONSTRAINT check_specialty CHECK (Specialty IN (
        'Respiratory', 'Cardiology', 'Gastroenterology', 
        'Endocrinology', 'Geriatrics', 'Hematology', 
        'Hepatology', 'Nephrology', 'Oncology', 
        'Pulmonology', 'Rheumatology'
    ))
);

CREATE TABLE Care_Taking (
    Inpatient_ID VARCHAR(10),
	Nurse_ID CHAR(10), 

	PRIMARY KEY (Inpatient_ID, Nurse_ID),
	FOREIGN KEY (Inpatient_ID) REFERENCES Patient(Patient_ID)
	ON DELETE CASCADE,
	
	FOREIGN KEY (Nurse_ID) REFERENCES Employee(Employee_ID)
	ON DELETE CASCADE,
	
	CONSTRAINT check_inpatient_id_caretaking_format CHECK (Inpatient_ID LIKE 'IP%'),
	CONSTRAINT check_nurse_id_caretaking_format CHECK (Nurse_ID LIKE 'NU%')
);

CREATE OR REPLACE FUNCTION check_nurse_experience_2()
RETURNS TRIGGER AS $$
DECLARE
    nurse_experience INT;
BEGIN
	SELECT experience_year into nurse_experience
    FROM employee
    WHERE employee_ID = NEW.Nurse_ID; 

    IF nurse_experience <= 1 THEN
        RAISE EXCEPTION 'nurse must have more than 1 year of experience to participate in taking care';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_check_nurse_experience_2
BEFORE INSERT OR UPDATE ON care_taking
FOR EACH ROW
EXECUTE FUNCTION check_nurse_experience_2();

CREATE TABLE Treatment (
    Inpatient_ID VARCHAR(10),
	Doctor_ID CHAR(10), 
    Admission_date DATE NOT NULL,      
    Discharge_date DATE NOT NULL,      
    Result VARCHAR(50),  

	PRIMARY KEY (Inpatient_ID, Doctor_ID),
	FOREIGN KEY (Inpatient_ID) REFERENCES Patient(Patient_ID)
	ON DELETE CASCADE,

	FOREIGN KEY (Doctor_ID) REFERENCES Employee(Employee_ID)
	ON DELETE CASCADE,
	
	CONSTRAINT check_inpatient_id_treat_format CHECK (Inpatient_ID LIKE 'IP%'),
	CONSTRAINT check_doctor_id_treat_format CHECK (Doctor_ID LIKE 'DO%'),
    CONSTRAINT check_admission_date CHECK (
        Admission_date >= '2015-01-01' AND 
        Admission_date <= CURRENT_DATE
    ),
    CONSTRAINT check_discharge_date CHECK (
        Discharge_date >= '2015-01-01' AND 
        Discharge_date <= CURRENT_DATE AND 
        Discharge_date > Admission_date
    ),
    CONSTRAINT check_result CHECK (
        Result IN ('Under treatment', 'Recovered', 
                   'Follow-up', 'Transferred to another hospital', 
                   'Hospitalized', 'Deceased', 'Continue treatment at home')
    )
);

CREATE OR REPLACE FUNCTION check_doctor_experience_2()
RETURNS TRIGGER AS $$
DECLARE
    doctor_experience INT;
BEGIN
	SELECT experience_year into doctor_experience
    FROM employee
    WHERE employee_ID = NEW.Doctor_ID; 

    IF doctor_experience <= 1 THEN
        RAISE EXCEPTION 'Doctor must have more than 1 year of experience to participate in treatment';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_check_doctor_experience_2
BEFORE INSERT OR UPDATE ON Treatment
FOR EACH ROW
EXECUTE FUNCTION check_doctor_experience_2();

CREATE TABLE Examination (
   	Outpatient_ID VARCHAR(10),
    Doctor_ID CHAR(10),
	Diagnosis CHAR(20),
	Examination_Date DATE 			NOT NULL,
    Next_Examination DATE,
    "Fee(VND)" DECIMAL(10, 2) 		CHECK ("Fee(VND)" >= 0),

	PRIMARY KEY (Outpatient_ID, Doctor_ID),
    FOREIGN KEY (Outpatient_ID) REFERENCES Patient(Patient_ID)
	ON DELETE CASCADE,
    FOREIGN KEY (Doctor_ID) REFERENCES employee(employee_ID)
	ON DELETE CASCADE,

	CONSTRAINT check_inpatient_id_examinate_format CHECK (Outpatient_ID LIKE 'OP%'),
	CONSTRAINT check_doctor_id_examinate_format CHECK (Doctor_ID LIKE 'DO%'),
    CONSTRAINT check_examination_date CHECK (
        Examination_Date >= '2020-01-01' AND
        Examination_Date <= CURRENT_DATE
    ),

    CONSTRAINT check_next_examination_date CHECK (
        Next_Examination IS NULL OR
      	(Next_Examination > Examination_Date AND
		Next_Examination >= CURRENT_DATE)
    )
);

CREATE TABLE Assignment (
    Patient_ID VARCHAR(10),
    DepartmentName CHAR(1), 
    RoomNumber VARCHAR(3),
    Purpose VARCHAR(20)				NOT NULL,

	PRIMARY KEY (Patient_ID, DepartmentName,RoomNumber),
	FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID) ON DELETE CASCADE,
	FOREIGN KEY (DepartmentName) REFERENCES Department(Name) ON DELETE CASCADE,
	FOREIGN KEY (RoomNumber, DepartmentName) REFERENCES Room(Number, Dep_Name) ON DELETE CASCADE,

	CONSTRAINT check_purpose CHECK (
        Purpose IN ('Examination', 'Treatment')
    )
);

CREATE TABLE Working_place (
    Employee_ID CHAR(10),
    DepartmentName CHAR(1),

	PRIMARY KEY (Employee_ID, DepartmentName),
	FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID) ON DELETE CASCADE,
	FOREIGN KEY (DepartmentName) REFERENCES Department(Name) ON DELETE CASCADE
);


CREATE OR REPLACE FUNCTION check_all_employee_department_in_working_place()
RETURNS TRIGGER AS $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM Employee e
        WHERE NOT EXISTS (
            SELECT 1
            FROM Working_place w
            WHERE w.Employee_ID = e.Employee_ID
        )
    ) then
	DELETE FROM Working_place;
        RAISE EXCEPTION 'Error: All employees have to work for one or more departments, working_place table is deleted, please insert again';
    END IF;

    IF EXISTS (
        SELECT 1
        FROM Department d
        WHERE NOT EXISTS (
            SELECT 1
            FROM Working_place w
            WHERE w.DepartmentName = d.Name
        )
    ) 
	THEN
        DELETE FROM Working_place;
        RAISE EXCEPTION 'Error: One deparment has to have at least 1 employee working,working_place table is deleted, please insert again';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER ensure_all_employee_department_in_working_place
AFTER INSERT on Working_place
FOR EACH STATEMENT
EXECUTE FUNCTION check_all_employee_department_in_working_place();







