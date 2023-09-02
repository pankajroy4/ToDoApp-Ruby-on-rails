class TodosController < ApplicationController
  before_action :require_signin , except: [:index]
  before_action :require_correct_user_todo ,except: [:index]

  def index
    @todos=Todo.all
  end
  
  def new 
    @user=User.find(params[:user_id])
    @todo=@user.todos.new
  end

  def create 
    @user=User.find(params[:user_id])
    @todo=@user.todos.new(todo_params)
    if @todo.save
      redirect_to user_path(@user),notice: "Task added successfully!"
    else
      render :new, status: :unprocessable_entity
    end
  end 

  def destroy 
    @todo=Todo.find(params[:id])
    @todo.destroy
    redirect_to user_path(params[:user_id]), notice: "Task deleted successfully!"
  end
  
  private 
    def todo_params
      params.require(:todo).permit(:title)
    end
end

