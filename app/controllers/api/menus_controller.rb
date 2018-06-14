class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :update, :destroy]
  
  def index
    render json: Menu.all 
  end

  def show
    render json: @menu 
  end

  def create
    menu = Menu.new(product_params)
    if menu.save
      render json: menu
    else
      render_errors(menu)
    end
  end

  def update
    if @menu.update(product_params)
      render json: @menu
    else
      render_errors(@menu)
    end
  end

  def destroy
    @menu.destroy
  end

  private 

    def set_menu
      @menu = Menu.find(params[:id])
    end

    def product_params
      params.require(:menu).permit(:meal)
    end
end

