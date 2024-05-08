class BaseController < ApplicationController
  def index
    @videos = Video.all
  end
end
