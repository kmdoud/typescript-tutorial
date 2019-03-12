class User
{
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    isReviewer: boolean;
    isAdmin: boolean;
    isActive: boolean;


    constructor()
    {

    }
}

let user: User = new User();

user.id = 0;
user.username = "testing1";
user.password = "password";
user.email = "testing@gmail.com";
user.phone = "123-321-4567";
user.firstname = "test";
user.lastname = "typescript";
user.isAdmin = false;
user.isReviewer = false;
user.isActive = true;


console.log(user);