var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = new User();
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
