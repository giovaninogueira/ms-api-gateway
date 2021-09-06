export class User {
    public name: string;
    public email: string;
    public password: string;
    public cellPhone: string;

    constructor(user: User) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.cellPhone = user.cellPhone;
    }
}