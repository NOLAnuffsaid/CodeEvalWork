ARGF.each do |word|
  $word_array = [] 
  word.sub!(/\n/, "").each_char do |letter|
    $word_array << letter unless ((word.count letter) > 1)
  end
  puts $word_array[0]
end