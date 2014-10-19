class Person
  attr_reader :sex, :age, :height, :town, :religion, :occupation

  def initialize(name, sex, age, height, town, religion, occupation)
    @name = name
    @sex = sex
    @age = age
    @height = height
    @town = town
    @religion = religion
    @occupation = occupation
  end

  def sex_change
    if @sex == "male"
      @sex = "female"
    elsif @sex == "female"
      @sex = "male"
    end
  end

  def get_old
    @age += 1
  end

  def grow(new_height)
    @height = new_height
  end

  def move(new_town)
    @town = new_town
  end

  def convert(new_religion)
    @religion = new_religion
  end

  def change_career(new_job)
    @occupation = new_job
  end
end