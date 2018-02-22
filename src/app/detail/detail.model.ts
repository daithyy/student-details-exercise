export class Detail {
    name: string;
    address: string;
    studentID: string;
    phoneNumber: string;
    notes: string;
    image: string;

    constructor(name: string, address: string, studentID: string,
                phoneNumber: string, notes: string, image: string)
    {
        this.name = name;
        this.address = address;
        this.studentID = studentID;
        this.phoneNumber = phoneNumber;
        this.notes = notes;
        this.image = image;
    }
}