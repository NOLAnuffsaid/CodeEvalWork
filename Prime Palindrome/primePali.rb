$prime_numbers = []
$range = (1..1000)

def is_Prime? num
  $range.each do |n|
    next if (n==num || n==1)
    if (num%n == 0)
      return false
    else
      next
    end
  end
  true
end

def is_Palindrome? num
  if num.to_s[0, 2] == num.to_s[(num.to_s.length - 2), 2].reverse
    true
  else
    false
  end
end

$range.each do |num|
  if is_Prime? num
    $prime_numbers << num
  end
end

$prime_numbers.reverse.each do |num|
  if !(is_Palindrome? num)
    next
  else
    p num
    break
  end 
end