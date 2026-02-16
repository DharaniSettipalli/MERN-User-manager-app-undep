//server endpoint
export const url = 'http://localhost:8080/user/'

// firstNames.js
export const firstNames = [
    "Aarav", "Vivaan", "Aditya", "Arjun", "Krishna", "Rohan", "Rahul", "Karan",
    "Amit", "Suresh", "Mahesh", "Ramesh", "Ankit", "Vikram", "Nikhil", "Pavan",
    "Sanjay", "Manish", "Deepak", "Prakash",
    "Ananya", "Kavya", "Priya", "Pooja", "Sneha", "Aishwarya", "Divya", "Neha",
    "Swathi", "Meena", "Lakshmi", "Sita", "Radha", "Nandini", "Bhavya",
    // ~100 first names is enough
];
// lastNames.js
export const lastNames = [
    "Sharma", "Verma", "Gupta", "Agarwal", "Mehta", "Patel", "Reddy", "Naidu",
    "Iyer", "Rao", "Chowdary", "Singh", "Kumar", "Malhotra", "Kapoor",
    "Bansal", "Goyal", "Joshi", "Mishra", "Pandey",
    // ~100 last names is enough
];

export const phoneNumbers = [
    "9876543201", "9876543202", "9876543203", "9876543204", "9876543205",
    "9876543206", "9876543207", "9876543208", "9876543209", "9876543210",

    "9765432101", "9765432102", "9765432103", "9765432104", "9765432105",
    "9765432106", "9765432107", "9765432108", "9765432109", "9765432110",

    "9654321001", "9654321002", "9654321003", "9654321004", "9654321005",
    "9654321006", "9654321007", "9654321008", "9654321009", "9654321010",

    "9543210001", "9543210002", "9543210003", "9543210004", "9543210005",
    "9543210006", "9543210007", "9543210008", "9543210009", "9543210010",

    "9432100001", "9432100002", "9432100003", "9432100004", "9432100005",
    "9432100006", "9432100007", "9432100008", "9432100009", "9432100010",

    "9321000001", "9321000002", "9321000003", "9321000004", "9321000005",
    "9321000006", "9321000007", "9321000008", "9321000009", "9321000010",

    "9210000001", "9210000002", "9210000003", "9210000004", "9210000005",
    "9210000006", "9210000007", "9210000008", "9210000009", "9210000010",

    "9100000001", "9100000002", "9100000003", "9100000004", "9100000005",
    "9100000006", "9100000007", "9100000008", "9100000009", "9100000010"
];

export const addresses = [
    "12-4-56, MG Road, Bengaluru, Karnataka",
    "Flat 302, Green Valley Apartments, Pune, Maharashtra",
    "45/7, Anna Nagar West, Chennai, Tamil Nadu",
    "H.No 8-2-293, Jubilee Hills, Hyderabad, Telangana",
    "Plot 19, Sector 62, Noida, Uttar Pradesh",
    "22 Park Street, Ballygunge, Kolkata, West Bengal",
    "Flat 501, Sunrise Residency, Indiranagar, Bengaluru",
    "3rd Floor, Lakshmi Towers, Ameerpet, Hyderabad",
    "House No 77, Model Town, New Delhi",
    "Ocean View Apartments, Marine Drive, Kochi, Kerala",
    "12/9, Ashok Nagar, Jaipur, Rajasthan",
    "Civil Lines, Near Railway Station, Nagpur, Maharashtra",
    "B-56, Sector 15, Faridabad, Haryana",
    "Pearl Residency, Andheri East, Mumbai",
    "Sai Nagar Colony, Nagole, Hyderabad",
    "MP Nagar Zone 1, Bhopal, Madhya Pradesh",
    "R.S Puram, Coimbatore, Tamil Nadu",
    "Royal Enclave, Whitefield, Bengaluru",
    "Shanti Nagar, Raipur, Chhattisgarh",
    "Sector 21, Gandhinagar, Gujarat",
    "Hinjewadi Phase 2, Pune, Maharashtra",
    "RK Puram, Patna, Bihar",
    "Salt Lake Sector V, Kolkata",
    "Gachibowli Main Road, Hyderabad",
    "Malleshwaram 8th Cross, Bengaluru"
];

export const dates = [
    "1988-04-02",
    "1989-11-18",
    "1990-01-26",
    "1990-08-29",
    "1991-06-18",
    "1991-07-09",
    "1992-02-25",
    "1992-05-31",
    "1993-01-15",
    "1993-03-10",
    "1994-03-18",
    "1994-09-13",
    "1995-02-11",
    "1995-08-07",
    "1996-04-08",
    "1996-12-24",
    "1997-02-16",
    "1997-08-19",
    "1998-01-20",
    "1998-06-04",
    "1999-09-21",
    "1999-10-09",
    "2000-05-14",
    "2001-07-22",
    "2002-12-01"
];

export const salaries = [
    25430,
    38975,
    42160,
    56780,
    61245,
    74890,
    83520,
    90415,
    47630,
    69850
];


// userSchema.js
//Adding a new field is adding a object
export const userSchema = [
    {
        name: "firstName",
        label: "First Name",
        type: "text",
        required: true,
        list: firstNames,
       },
    {
        name: "lastName",
        label: "Last Name",
        type: "text",
        required: true,
        list: lastNames,
       },
    {
        name: "phoneNumber",
        label: "Phone Number",
        type: "number",
        required: true,
        list: phoneNumbers,
       },
    {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        },
    {
        name: "dob",
        label: "Date of Birth",
        type: "date",
        list: dates
    },
    {
        name: "address",
        label: "Address",
        type: "textarea",
        list: addresses
    },
    {
        name: "gender",
        label: "Gender",
        type: "text",
        list: ['Male','Female']
    },
    {
        name: "salary",
        label: "Salary",
        type: "number",
        list: salaries
    }
];



