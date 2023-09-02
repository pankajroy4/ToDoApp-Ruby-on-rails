class UsersController < ApplicationController
    before_action :require_correct_user, only: [:edit,:update,:destroy]
    
    def index
        @users=User.all
    end

    def new
        @user=User.new
    end

    def create
        @user=User.new(user_params)
        if @user.save
            session[:user_id]=@user.id
            redirect_to user_path(@user) ,notice: "Signed up successfully!"
        else
            render :new, status: :unprocessable_entity
        end
    end

    def show    
        @user=User.find(params[:id])
    end
    
    def edit
        @user=User.find(params[:id])
    end

    def update
        @user=User.find(params[:id])
        if @user.update(user_params)
            redirect_to user_path(params[:id]) , notice: "Account updated successfully"
        else 
            render :edit ,status: :unprocessable_entity
        end 
    end

    def destroy
        @user= User.find(params[:id])
        session[:user_id]=nil
        @user.destroy 
        redirect_to  root_path , status: :see_other,notice: "Account deleted successfully"
    end
    private
        def user_params
            params.require(:user).permit(:name,:email,:password,:password_confirmation)
        end
end
