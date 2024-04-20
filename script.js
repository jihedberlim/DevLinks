function toggleMode() {
    const body = document.body
    const profilePic = document.querySelector("#profile img")

    body.classList.toggle('light')

    if(body.classList.contains('light')) {
        profilePic.setAttribute('src', './assets/profile-pic/profile-light.png')
        profilePic.setAttribute('alt', "Foto de perfil Jihed Berlim com fundo branco")
    } else {
        profilePic.setAttribute('src', './assets/profile-pic/profile-dark.png')
        profilePic.setAttribute('alt', "Foto de perfil Jihed Berlim com fundo roxo")
    }
}