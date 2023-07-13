const screen = {
    userProfile: document.querySelector(".profile-data"), 
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info"> 
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/> 
                                            <div class="data">
                                                <h1>${user.name?? 'Não possui nome cadastrado :(' }</h1>
                                                <p>${user.bio?? 'Não possui nome cadastrado :(' }</p><br>
                                                <p>Followers: ${user.followers}</p>
                                                <p>Following: ${user.following}</p>
                                            </div> 
                                      </div>`


        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += 
            `<li><a href="${repo.html_url}" target="_blank">${repo.name}<br><br>
                <span> 
                    <img src="./src/images/forks.png" alt="forks"> ${repo.forks_count?? 'Sem forks'} </span>  
                <span>
                    <img src="./src/images/star.png" alt="star"> ${repo.stargazers_count?? 'Sem estrelas'} 
                </span>
                <span>
                    <img src="./src/images/eyes.png" alt="eyes"> ${repo.watchers_count?? 'Sem watchers'} 
                </span>
                <span>
                    <img src="./src/images/work.png" alt="working on a computer"> ${repo.language?? 'Sem linguagem'} 
                </span>
            </a></li>`
    )
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItems}</ul>
                                           </div>`


       
        let eventItems = ''
        user.moves.forEach(move =>{
            if (move.type === 'PushEvent'){
                eventItems += `<li> <span> ${move.repo.name} - </span>
                                     ${move.payload.commits[0].message}
                               </li>`
            } else{
                eventItems += `<li> <span> ${move.repo.name} - </span> 
                                    Criado um ${move.payload.ref_type}
                               </li>`
            }
        })

        this.userProfile.innerHTML += `<div class="events section">
                                            <h2>Eventos</h2>
                                            <ul> ${eventItems} </ul>
                                      </div>`
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export{ screen }