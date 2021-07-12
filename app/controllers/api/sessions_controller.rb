class Api::SessionsController < ApplicationController

  def create
    debugger
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    );
    debugger
    if !@user
      debugger
      render json: ['User not found']
    else
      login(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if !current_user
      render json: { status: 404}
    else
      logout
      render json: {}
    end
  end

end
