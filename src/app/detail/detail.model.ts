export class Detail {
    name: string;
    address: string;
    studentID: string;
    phoneNumber: string;
    notes: string;

    constructor(name: string, address: string, studentID: string,
                phoneNumber: string, notes: string)
    {
        this.name = name;
        this.address = address;
        this.studentID = studentID;
        this.phoneNumber = phoneNumber;
        this.notes = notes;
    }
}