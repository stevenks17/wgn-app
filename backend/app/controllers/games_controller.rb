class GamesController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]

    def index
        @games = Game.all
        render json: @games, only: [:id, :title, :developer, :cover], status: 200
    end

    def create
        @game = Game.create(game_params)
        render json: @game, status: 200
    end

    def show
        render json: @game, status: 200
    end

    def destroy
        @game.destroy
    end

    private

    def game_params
        params.require(:game).permit(:title, :developer, :cover)
    end

    def set_params
        @game = Game.find(params[:id])
    end
end
