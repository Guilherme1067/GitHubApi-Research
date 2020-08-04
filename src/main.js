import api from "./api"
class App{
    constructor(){
        this.repositories = []
        
        this.formEL = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]')
        
        this.registerHandlers();
    }
    
    registerHandlers(){
        this.formEL.onsubmit = event =>  this.addRepository(event);
    }
    
    async addRepository(event){
        event.preventDefault();
        this.repoInput = this.inputEl.value;
        this.loader();

        try{

            const response = await api.get(`/repos/${this.repoInput}`)
              const {name, description,html_url, owner:{avatar_url}} = response.data
              this.repositories.push({
                 name, 
                 description,
                 avatar_url, 
                 html_url, 
              });
        }
        catch{
            console.clear();
                alert('Repositório inexistente')
        }

            this.inputEl.value = "";
            this.render();
        }

        render(){
            this.listEl.innerHTML = ""
            
            this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name))

            let description = document.createElement('p');
            description.appendChild(document.createTextNode(repo.description))
            
            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(description);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl)
            })
            

        }

        loader() {
            let loaderEl1 = document.createElement('span');
                loaderEl1.appendChild(document.createTextNode('Carregando...'))
            this.listEl.appendChild(loaderEl1)
        }
}
new App();