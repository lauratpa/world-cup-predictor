class CountrySerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :id, :name

  attribute :image_link do |object|
    "/public/flags/#{object.name.parameterize}.png"
  end
end
