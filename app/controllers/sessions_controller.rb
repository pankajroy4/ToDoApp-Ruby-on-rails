class SessionsController < ApplicationController
    def new
    end
    def create
        @user=User.find_by(email: params[:email])
        user=@user
        if user && user.authenticate(params[:password])
            session[:user_id]=user.id
            redirect_to user_path(user.id), notice: "Welcome back, #{user.name}!"
        else 
            if @user==nil
                flash[:alert] ="Record not found! Please sign up first."
            else
                flash[:alert] ="Invallid emial/password combination!"
            end
            @user=nil
            # render :new, status: :unprocessable_entity
            redirect_to root_path, status: :unprocessable_entity
        end
    end

    def destroy
        session[:user_id]=nil
        redirect_to root_path, status: :see_other,notice: "You are now signed out!"
    end
end