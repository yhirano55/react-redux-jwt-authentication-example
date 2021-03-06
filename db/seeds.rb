# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  username: "admin",
  email: "admin@example.com",
  password: "password",
  password_confirmation: "password",
)

User.create(
  Array.new(30) do
    {
      username: Faker::Internet.user_name,
      email: Faker::Internet.email,
      password: "password",
      password_confirmation: "password",
    }
  end
)

Post.create(
  Array.new(30) do
    {
      title: Faker::Lorem.sentence,
      body: Faker::Lorem.paragraph,
    }
  end
)
