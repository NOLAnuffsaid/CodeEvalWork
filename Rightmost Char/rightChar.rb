$line_a = []
$sentences = []
$letters = []

ARGF.each do |lines|
  lines.sub!(/\n/, "")
  $line_a << lines.split(',')
end

def find_Char sentence, letter
  if (!sentence.include? letter)
    -1
  else
    sentence.rindex(letter)    
  end
end

$line_a.each do |l|
  p find_Char l[0], l[1]
end