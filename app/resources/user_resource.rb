class UserResource < JSONAPI::Resource
  immutable
  attributes :username, :email
end
