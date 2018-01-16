function checkUsersValid(goodUsers){
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(
            function check(submittedUser)
            { 
                return goodUsers.some(
                    function checkgoodUsers(goodUser)
                    {
                        return gooduser.id===submitteduser.id;
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
