export class contact {
    name = '';
    lastName = '';
    Mail = '';
    status = false;   

    constructor(name, lastName, Mail, status){
        this.name = name;
        this.lastName = lastName;
        this.Mail = Mail;
        this.status = status;
    }
}