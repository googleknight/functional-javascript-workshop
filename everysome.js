function checkUsersValid(goodUsers){
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(
            function check(submittedUser)
            { 
                return goodUsers.some(
                    function checkgoodUsers(goodUser)
                    {
                        return goodUser.id===submittedUser.id;
                    }
                );
            }
        );   
    }
}


//Test Cases

let goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3}
];
let testUsers = [
    { id: 2},
    { id: 3}
];

//Test Cases
console.log("Some users are in good users list:",(checkUsersValid(goodUsers))(testUsers));
testUsers = [
    { id: 5},
    { id: 3}
];
console.log("Some users are not in good users list:",(checkUsersValid(goodUsers))(testUsers));