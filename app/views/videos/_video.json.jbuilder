json.extract! video, :id, :title, :user_id, :url, :description, :created_at, :updated_at
json.url video_url(video, format: :json)
