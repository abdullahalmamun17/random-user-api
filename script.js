const data = () => {
    fetch('https://randomuser.me/api/') //?results=5000
        .then(res => res.json())
        .then(data => {
            const UserData = data.results[0]
            console.log(UserData);
            document.getElementById('image').src = UserData.picture.large
            document.getElementById('userInfoType').innerText = `Hi, I am`
            document.getElementById('userInfo').innerText = `${UserData.name.title} ${UserData.name.first} ${UserData.name.last}`
            displayData(data)
        })
        .catch(err => console.log(err))

}
const icons = () => {
    const iconList = document.querySelectorAll('i')

    const icon = {
        user: iconList[0],
        email: iconList[1],
        birthday: iconList[2],
        address: iconList[3],
        phone: iconList[4],
        password: iconList[5]
    }
    return icon
}

const displayData = data => {
    const userData = data.results[0]
    const userDetails = document.getElementById('userInfo')
    const userInfoType = document.getElementById('userInfoType')
    const user = icons().user
    const email = icons().email
    const address = icons().address
    const phone = icons().phone
    const birthday = icons().birthday
    const password = icons().password

    user.addEventListener('mouseover', () => {
        const name = userData.name
        userInfoType.innerText = `Hi, I am`
        userDetails.innerText = `${name.title} ${name.first} ${name.last}`
    })
    email.addEventListener('mouseover', () => {
        userInfoType.innerText = `My email is`
        userDetails.innerText = userData.email

    })
    birthday.addEventListener('mouseover', () => {
        const dob = userData.dob.date
        userInfoType.innerText = `My birthday is`
        userDetails.innerText = dob.split('T')[0]
    })
    address.addEventListener('mouseover', () => {
        userInfoType.innerText = `I'm From`
        userDetails.innerText = `${userData.location.street.name}, ${userData.location.city}, ${userData.location.country} `
    })
    phone.addEventListener('mouseover', () => {
        userInfoType.innerText = `My Cell Phone Number`
        userDetails.innerText = userData.phone
    })
    password.addEventListener('mouseover', () => {
        userInfoType.innerText = `My Login Details`
        userDetails.innerHTML = `User Name: ${userData.login.username} <br> Password: ${userData.login.password}`
    })

}
data();