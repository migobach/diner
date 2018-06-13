class Api::DishesController < ApplicationController
  before_action :set_menu 
  before_action :set_dish, only: [:show, :update, :destroy]
  
  def index
    render json: Dish.all
  end

  def show
    render json: @dish 
  end

  def create
    dish = @menu.dish.new(menuItem_params)
    if dish.save
      render json: dish
    else
      render_errors(dish)
    end
  end

  def update
    if @dish.update(menuItem_params)
      render json: @dish
    else
      render_errors(@dish)
    end
  end

  def destroy
    @dish.destroy
  end

  private 
    def menuItem_params
      params.require(:dish).permit(:title, :description, :price)
    end
    
    def set_dish
      @dish = Dish.find(pramas[:id])
    end

    def set_menu
      @menu = Menu.find(params[:menu_id])
    end
end

