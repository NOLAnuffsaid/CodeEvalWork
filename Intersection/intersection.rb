$number_list = []
$intersecting_num = []

ARGF.each do |line|
  line.sub!(/\n/, "")
  $number_list << line.chars
end

p $number_list