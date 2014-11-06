  airplanes = Hash.new
  planes_arr = %w(boeing airbus canadair embraer)


  planes_arr.each_with_index do |plane, index|
    airplanes[plane] = index
  end
  hash   #=> {"boeing"=>0, "airbus"=>1, "canadair"=>2, "embraer"=>0 }



  airplanes = [777, 320, 380, 767, 747, 340]

  airplanes.inject(:+) #=> 3331

  airplanes.inject(:*) # => 18405578685312000

  airplanes.inject(:-) # => -1777




airplanes = [777, 320, 380, 767, 747, 340]

airplanes.map do |element|
  if element < 400
    "A" + element.to_s
  elsif element > 700
    "B" + element.to_s
  end
end

#=> ["B777", "A320", "A380", "B767", "B747", "A340"]


bad_airplanes = ["any_russian_or_ukranian_airplane", "Boeing 787", "Airbus A310", "Boeing 747SP," "Airbus A340-200"]


bad_airplanes.include?("Airbus A340-200") #=> true
bad_airplanes.include?("Boeing 747-400") #=> false













