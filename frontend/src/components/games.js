class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadGames()
    }
    initBindingsAndEventListeners() {
        this.newGameForm = document.getElementById('new-game-form')
        this.newGameTitle = document.getElementById('new-book-title')
        this.newGameDeveloper = document.getElementById('new-game-developer')
        this.newGameCover = document.getElementById('new-game-cover')
        this.newGameForm.addEventListener('submit', this.createGame.bind(this))
    }

    createGame(g) {
        g.preventDegault();
        const titleValue = this.newGameTitle.value;
        const developerValue = this.newGameDeveloper.value;
        const coverValue = this.newGameCover.value;

        this.adapter.createGame(titleValue, developerValue, coverValue)
            .then(game => {
            const newGame = new Games(game)
            this.games.push(newGame)
            this.newGameTitle.value = ' '
            this.newGameDeveloper.value = ' '
            this.newGameCover.value = ' '
            newGame.renderGameBlock()
        })
    }

    renderGameBlock() {
        this.games.map(game => game.renderGameBlock())
    }
}