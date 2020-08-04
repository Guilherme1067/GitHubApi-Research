class App{
    constructor(){
        this.repositories = []
        
        this.formEL = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

        registerHandlers(){
            this.formEL.onsubmit = event =>  this.addRepository(event);
        }

        addRepository(event){
            event.preventDefault();
            this.repositories.push({
               name: 'rocktseat.com.br',
               description: 'Tire a sua ideia do papel e dê vida à sua startup.',
               avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
               html_url: 'http://github.com/rocketseat/rocketseat.com.br', 
            });
            this.render();
        }

        render(){
            this.listEl.innerHTML = "";

            this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name))

            let description = document.createElement('p');
            description.appendChild(document.createTextNode(repo.description))
            
            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank')
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(description);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl)
            })
            

        }
}
new App();