ARGF.each do |digits|
  $sum = 0
  digits.sub!(/\n/, "").chars.each do |num|
    $sum += num.to_i
  end
  p $sum
end