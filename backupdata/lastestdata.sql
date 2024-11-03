--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: department; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.department (name) FROM stdin;
A
B
C
D
E
\.


--
-- Data for Name: patient; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.patient (patient_id, fname, mname, lname, phone_number, gender, age, "Weight(kg)", "Height(m)") FROM stdin;
OP000001	Nguyễn	Văn	An	0123456789	M	30	75.50	1.75
OP000002	Trần	Thị	Bình	0987654321	F	25	60.20	1.65
IP000003	Lê	Văn	Cường	0912345678	M	40	80.00	1.80
OP000004	Phạm	Thị	Đào	0909876543	F	22	55.00	1.62
IP000005	Hoàng	Văn	Khánh	0988123456	M	35	90.30	1.78
OP000006	Vũ	Thị	Lan	0932123456	F	29	50.50	1.60
IP000007	Đỗ	Văn	Minh	0945321765	M	45	85.20	1.77
OP000008	Bùi	Thị	Nga	0921765432	F	27	62.30	1.68
IP000009	Nguyễn	Văn	Phúc	0912654378	M	32	70.10	1.72
OP000010	Phạm	Thị	Quyên	0906543789	F	24	54.80	1.64
OP000011	Nguyễn	Thị Hồng	Lan	0123678901	F	28	52.30	1.62
IP000012	Trần	Ngọc Bảo	Châu	0987123456	F	33	60.80	1.68
OP000013	Phạm	Văn Hữu	Thành	0908765432	M	26	70.50	1.75
IP000014	Lê	Thị Kim	Liên	0945123678	F	35	58.10	1.63
OP000015	Hoàng	Nhật Minh	Quang	0912987654	M	31	78.40	1.80
\.


--
-- Data for Name: room; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.room (number, dep_name) FROM stdin;
101	A
101	B
101	C
101	D
101	E
102	A
103	A
201	A
202	A
102	B
201	B
301	B
102	C
102	D
102	E
103	E
\.


--
-- Data for Name: assignment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.assignment (patient_id, departmentname, roomnumber, purpose) FROM stdin;
OP000001	A	101	Examination
OP000002	A	102	Treatment
IP000003	A	103	Examination
OP000004	A	201	Treatment
IP000005	B	101	Examination
OP000006	B	102	Treatment
IP000007	B	201	Examination
OP000008	C	101	Treatment
IP000009	C	102	Examination
OP000010	D	101	Treatment
OP000011	D	102	Examination
IP000012	E	103	Treatment
OP000013	E	101	Examination
IP000014	A	102	Treatment
OP000015	B	301	Examination
\.


--
-- Data for Name: bill; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bill (bill_id, "Total_price(VND)", date, customer_id) FROM stdin;
OP0000010001	150000.00	2023-01-15	OP000001
OP0000020002	200000.00	2023-02-10	OP000002
IP0000030003	300000.00	2023-03-20	IP000003
OP0000040004	180000.00	2023-04-05	OP000004
IP0000050005	250000.00	2023-05-25	IP000005
OP0000060006	120000.00	2023-06-30	OP000006
IP0000070007	210000.00	2023-07-15	IP000007
OP0000080008	300000.00	2023-08-20	OP000008
IP0000090009	170000.00	2023-09-10	IP000009
OP0000100010	220000.00	2023-10-05	OP000010
OP0000110011	140000.00	2023-11-12	OP000011
IP0000120012	280000.00	2023-12-01	IP000012
OP0000130013	190000.00	2023-12-20	OP000013
IP0000140014	230000.00	2024-01-10	IP000014
OP0000150015	160000.00	2024-01-15	OP000015
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (employee_id, fname, mname, lname, age, "Fixed_Salary(VND)", "Bonus(VND)", gender, phone_number, experience_year, working_hour) FROM stdin;
NU0001	Nguyễn	Văn	A	30	8000000.00	\N	M	0123456789	5	40
DO0002	Trần	Thị	B	28	10000000.00	\N	F	0987654321	3	38
OT0003	Lê	Văn	C	29	5000000.00	\N	M	0912345678	4	42
NU0004	Phạm	Thị	D	25	5000000.00	\N	F	0909876543	2	36
DO0005	Hoàng	Văn	E	35	25000000.00	\N	M	0988123456	6	45
OT0006	Vũ	Thị	F	40	5000000.00	\N	F	0932123456	1	30
NU0007	Đỗ	Văn	G	30	12000000.00	\N	M	0945321765	7	48
DO0008	Bùi	Thị	H	25	15000000.00	\N	F	0921765432	5	39
OT0009	Nguyễn	Văn	I	28	5000000.00	\N	M	0912654378	3	41
NU0010	Phạm	Thị	J	25	5000000.00	\N	F	0906543789	2	35
DO0011	Hoàng	Việt	Hùng	25	5000000.00	\N	M	0912187656	0	35
NU0012	Mai		Loan	25	2000000.00	\N	M	0912982654	0	32
\.


--
-- Data for Name: care_taking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.care_taking (inpatient_id, nurse_id) FROM stdin;
IP000003	NU0001    
IP000003	NU0004    
IP000005	NU0004    
IP000007	NU0007    
IP000007	NU0001    
IP000009	NU0007    
IP000012	NU0010    
IP000014	NU0010    
\.


--
-- Data for Name: dependent; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dependent (fname, mname, lname, phone_number, patient_id) FROM stdin;
Nguyễn	Thị	Mai	0123456789	OP000001
Nguyễn	Thị	Mai	0123456789	IP000003
Nguyễn	Quang	Duy	0987654321	OP000002
Trần	Văn	Dũng	0987654321	IP000005
Lê	Thị	Hương	0912345678	OP000004
Phạm	Văn	Hải	0909876543	OP000006
Trần	Hoàng Anh	Khoa	0909876543	IP000007
Hoàng	Thị	Linh	0988123456	IP000009
Vũ	Thị	Lan	0932123456	OP000008
Vũ	Thị	Lan	0932123456	IP000014
\.


--
-- Data for Name: doctor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.doctor (doctor_id) FROM stdin;
DO0002
DO0005
DO0008
DO0011
\.


--
-- Data for Name: examination; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.examination (outpatient_id, doctor_id, diagnosis, examination_date, next_examination, "Fee(VND)") FROM stdin;
OP000001	DO0002    	Flu                 	2023-01-10	\N	500000.00
OP000002	DO0005    	Allergy             	2023-02-15	2024-12-15	300000.00
OP000004	DO0002    	Migraine            	2023-04-20	\N	400000.00
OP000006	DO0008    	Back Pain           	2023-06-05	\N	350000.00
OP000008	DO0005    	Checkup             	2023-08-20	\N	250000.00
OP000010	DO0002    	Stomachache         	2023-10-05	\N	300000.00
OP000011	DO0005    	Anxiety             	2023-11-12	2024-11-12	400000.00
OP000013	DO0002    	Fatigue             	2024-01-10	2024-12-10	300000.00
OP000015	DO0008    	Checkup             	2024-02-20	2025-03-20	250000.00
\.


--
-- Data for Name: inpatient; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inpatient (inpatient_id) FROM stdin;
IP000003
IP000005
IP000007
IP000009
IP000012
IP000014
\.


--
-- Data for Name: medication; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.medication (medication_id, medication_name, "Price(VND)", effect, expired_date, patient_id, "Usage") FROM stdin;
ALB0000001	Albuterol	20000.00	Pain Relief	2025-12-31	OP000001	{"SIDE_EFFECTS": ["dizziness", "nausea", "headache"], "TIME_IN_THE_DAY": {"morning": {"take": "before meal", "unit": "pill", "amount": 1}, "afternoon": {"take": "before meal", "unit": "ml", "amount": 100}}}
SAL0000002	Salmeterol	15000.00	Antipyretic	2026-03-15	OP000002	{"SIDE_EFFECTS": ["tremors", "palpitations"], "TIME_IN_THE_DAY": {"noon": {"take": "after meal", "unit": "inhalation", "amount": 1}, "morning": {"take": "before meal", "unit": "inhalation", "amount": 1}}}
LIS0000003	Lisinopril	30000.00	Anti-inflammatory	2027-05-20	IP000003	{"SIDE_EFFECTS": ["cough", "dizziness"], "TIME_IN_THE_DAY": {"morning": {"take": "with meal", "unit": "pill", "amount": 1}}}
AML0000004	Amlodipine	25000.00	Antibiotic	2025-08-10	OP000004	{"SIDE_EFFECTS": ["swelling", "flushing"], "TIME_IN_THE_DAY": {"morning": {"take": "any time", "unit": "pill", "amount": 1}}}
OME0000005	Omeprazole	18000.00	Antiviral	2026-07-30	IP000005	{"SIDE_EFFECTS": ["stomach pain", "nausea"], "TIME_IN_THE_DAY": {"morning": {"take": "before breakfast", "unit": "pill", "amount": 1}}}
ESO0000006	Esomeprazole	22000.00	Pain Relief	2028-01-01	OP000006	{"SIDE_EFFECTS": ["stomach pain", "diarrhea"], "TIME_IN_THE_DAY": {"morning": {"take": "before breakfast", "unit": "pill", "amount": 1}}}
INS0000007	Insulin glargine	40000.00	Pain Relief	2029-06-15	IP000007	{"SIDE_EFFECTS": ["low blood sugar", "weight gain"], "TIME_IN_THE_DAY": {"night": {"take": "at bedtime", "unit": "units", "amount": 10}}}
LEV0000008	Levothyroxine	28000.00	Antipyretic	2025-11-01	OP000008	{"SIDE_EFFECTS": ["heart palpitations", "weight loss"], "TIME_IN_THE_DAY": {"morning": {"take": "on an empty stomach", "unit": "pill", "amount": 1}}}
SER0000009	Sertraline	32000.00	Anti-inflammatory	2027-10-25	IP000009	{"SIDE_EFFECTS": ["nausea", "sleep disturbances"], "TIME_IN_THE_DAY": {"morning": {"take": "with or without food", "unit": "pill", "amount": 1}}}
LOR0000010	Lorazepam	20000.00	Antibiotic	2025-09-30	OP000010	{"SIDE_EFFECTS": ["drowsiness", "dizziness"], "TIME_IN_THE_DAY": {"night": {"take": "before sleep", "unit": "pill", "amount": 1}}}
WAR0000011	Warfarin	15000.00	Antiviral	2026-12-20	OP000011	{"SIDE_EFFECTS": ["bleeding", "bruising"], "TIME_IN_THE_DAY": {"evening": {"take": "at the same time every day", "unit": "pill", "amount": 1}}}
FER0000012	Ferrous sulfate	18000.00	Pain Relief	2029-02-28	IP000012	{"SIDE_EFFECTS": ["constipation", "nausea"], "TIME_IN_THE_DAY": {"morning": {"take": "on an empty stomach", "unit": "pill", "amount": 1}}}
SOF0000013	Sofosbuvir	40000.00	Antipyretic	2025-05-05	OP000013	{"SIDE_EFFECTS": ["fatigue", "headache"], "TIME_IN_THE_DAY": {"morning": {"take": "with food", "unit": "pill", "amount": 1}}}
SIL0000014	Silymarin	17000.00	Anti-inflammatory	2028-11-15	IP000014	{"SIDE_EFFECTS": ["diarrhea", "upset stomach"], "TIME_IN_THE_DAY": {"morning": {"take": "with meal", "unit": "pill", "amount": 1}}}
FUR0000015	Furosemide	22000.00	Antibiotic	2026-03-01	OP000015	{"SIDE_EFFECTS": ["increased urination", "dizziness"], "TIME_IN_THE_DAY": {"morning": {"take": "with food", "unit": "pill", "amount": 1}}}
\.


--
-- Data for Name: nurse; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nurse (nurse_id) FROM stdin;
NU0001
NU0004
NU0007
NU0010
NU0012
\.


--
-- Data for Name: outpatient; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.outpatient (outpatient_id) FROM stdin;
OP000001
OP000002
OP000004
OP000006
OP000008
OP000010
OP000011
OP000013
OP000015
\.


--
-- Data for Name: specialties; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.specialties (doctor_id, specialty) FROM stdin;
DO0002    	Cardiology          
DO0005    	Gastroenterology    
DO0008    	Pulmonology         
DO0002    	Gastroenterology    
DO0002    	Pulmonology         
DO0005    	Hematology          
DO0008    	Oncology            
\.


--
-- Data for Name: treatment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.treatment (inpatient_id, doctor_id, admission_date, discharge_date, result) FROM stdin;
IP000003	DO0002    	2023-01-01	2023-01-10	Recovered
IP000003	DO0005    	2023-01-01	2023-01-10	Recovered
IP000005	DO0005    	2023-02-01	2023-02-20	Under treatment
IP000007	DO0002    	2023-03-05	2023-03-15	Transferred to another hospital
IP000012	DO0008    	2023-04-10	2023-04-20	Follow-up
IP000014	DO0002    	2023-05-01	2023-05-05	Recovered
\.


--
-- Data for Name: working_place; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.working_place (employee_id, departmentname) FROM stdin;
NU0001    	A
NU0001    	B
DO0002    	B
OT0003    	C
NU0004    	D
DO0005    	E
OT0006    	A
NU0007    	B
DO0008    	C
DO0008    	D
OT0009    	D
NU0010    	E
NU0012    	B
DO0011    	A
\.


--
-- PostgreSQL database dump complete
--

