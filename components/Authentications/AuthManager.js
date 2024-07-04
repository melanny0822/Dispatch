const registeredUsers = []

const registerUser = (username, email, password) => {
    registeredUsers.push({username, email, password})
}

const validateUser = (email, password) => {
    const user = registeredUsers.find(
        (user) => user.email === email && user.password === password
    ) 
    return user !== undefined
}

export {registerUser, validateUser }