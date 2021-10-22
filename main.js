const linkSocialMedia = {
    github: 'maarciov',
    instagram: 'maarciov'
}

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linkSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userPic.src = data.avatar_url
            userLogin.textContent = data.login
        })
}

getGitHubProfileInfos()