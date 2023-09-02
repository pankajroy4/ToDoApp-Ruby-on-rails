class ApplicationController < ActionController::Base
    private
        def current_user
            User.find(session[:user_id]) if session[:user_id] # this makes current_user method available to all controller
        end
        helper_method :current_user # this makes current_user method available to all views and helper

        def current_user?(user)
            current_user==user
        end
        helper_method :current_user?
        
        def current_user_admin?
             current_user && current_user.admin?
        end
        helper_method :current_user_admin?

        def require_signin
            unless current_user
                session[:intended_url]=request.url
                redirect_to login_url, alert: "Unauthorized access! Please sign in first."
            end
        end


        def require_correct_user
            @user=User.find(params[:id])
            redirect_to root_path ,alert:"UnAuthorized Access! Requires Login/Sigup" unless current_user?(@user)
        end
        helper_method :require_correct_user

        def require_correct_user_todo
            @user=User.find(params[:user_id])
            redirect_to root_path ,alert:"UnAuthorized Access! Requires Login/Sigup" unless current_user?(@user)
        end
        helper_method :require_correct_user_todo
end
