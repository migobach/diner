

3.times do 
  menu = Menu.create(
    meal: Faker::Food.dish,
  )
  20.times do 
    menu.dishes.create(
      title: Faker::Dessert.topping, 
      description: Faker::Hipster.sentence,
      price: Faker::Commerce.price
    )
  end
end