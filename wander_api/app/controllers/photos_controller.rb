class PhotosController < ApplicationController

  # before_action :authenticate_user!, only: [:index]

  def index
    # Don't have a view in the BE, so don't need this instance variable:
    # @photos = Photo.all

    # instead let's render JSON
    render json: Photo.all, status: 200
  end

end
