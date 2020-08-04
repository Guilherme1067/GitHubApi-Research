class App{
    constructor(){
        this.repositories = []
        
        this.formEL = document.getElementById('repo-form');

        this.registerHandlers();
    }

        registerHandlers(){
            this.formEL.onsubmit = event =>  this.addRepository(event);
        }

        addRepository(event){
            event.preventDefault();
            this.repositories.push({
               nome: 'rocktseat.com.br',
               description: 'Tire a sua ideia do papel e dê vida à sua startup.',
               avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
               html_url: 'http://github.com/rocketseat/rocketseat.com.br', 
            });
            console.log(this.repositories)
        }
}
new App();