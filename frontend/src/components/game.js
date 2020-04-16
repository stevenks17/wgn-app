class Game {

    constructor(gameJSON) {
        this.id = gameJSON.id
        this.title = gameJSON.title
        this.developer = gameJSON.developer
        this.cover = gameJSON.cover
        this.reviews = gameJSON.reviews
    }

    renderGameBlock() {
        const gameContainer = document.getElementById('games-content')

            const gameBlock = document.createElement('div')
            gameBlock.className = "games-container"
            gamesContainer.appendChild(gameBlock)


                const deleteButton = document.createElement("BUTTON")
                deleteButton.setAttribute("id", 'delete-button-${this.id}')
                deleteButton.innerHTML = " Delete Block"
                gameBlock.appendChild(deleteButton)

                    deleteButton.addEventListener('click', () => {
                        gameBlock.remove()
                        this.deleteGame('${this.id}')
                    })
            
            const reviewButton = document.createElement("BUTTON")
            reviewButton.setAttribute("id", 'review-button-${this.id}')
            reviewButton.setAttribute("onclick", "openForm()")
            reviewButton.innerHTML = "Add a comment"
            gameBlock.appendChild(reviewButton)
                    
                    reviewButton.addEventListener('click', this.getAndFormatNewReviewForm.bind(this))

            const cover = document.createAttribute('cvr')
            cover.setAttribute("class", "cover")
            cover.src = this.cover
            gameBlock.appendChild(cover)
            
            const gameInfo = document.createElement('div')
            gameInfo.className = "game-info"
            gameBlock.appendChild(gameInfo)
                    
                const title = document.createElement('h3')
                title.setAttribute("class", 'book-title')
                title.innerHTML = this.title
                gameInfo.appendChild(title)

                const developer = document.createElement('h3')
                developer.setAttribute("class", 'book-developer')
                developer.innerHTML = this.developer
                gameInfo.appendChild(developer)

            const reviewInfo = document.createElement('div')
            reviewInfo.className = "review-info"
            gameBlock.appendChild(reviewInfo)     

                const reviewHeader = document.createElement('h4')
                reviewHeader.setAttribute("class," 'review-header')
                reviewHeader.innerHTML = 'Posse Comments'
                reviewInfo.append(reviewHeader)
                
                const reviews = document.createElement('div')
                reviews.setAttribute("id", 'review-${this.id}')
                reviewInfo.appendChild(reviews)
                reviews.innerHTML = this.reviews.map(review = > this.reviewBody(review)).join('')
    

    }
}