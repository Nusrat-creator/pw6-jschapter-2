function giveChange(amount) {

  if (amount <= 0) {
    console.log("No change needed.");
    return;
  }

  const banknotes = [200, 100, 50, 20, 10, 5, 1];
  let remainingAmount = amount;
  let changeDetails = [];
  function formatCount(count, note) {
    const numberWords = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    if (count === 1) {
      return `a ${note} Manat banknote`;
    } else {
      let countStr = count < 10 ? numberWords[count] : count.toString();
      return `${countStr} ${note} Manat banknotes`;
    }
  }

  for (let i = 0; i < banknotes.length; i++) {
    let note = banknotes[i];
    
    let count = Math.floor(remainingAmount / note);
    
    if (count > 0) {
      changeDetails.push(formatCount(count, note));
      
      remainingAmount = remainingAmount % note;
    }
  }
  let outputString = "";
  if (changeDetails.length === 1) {
    outputString = changeDetails[0];
  } else if (changeDetails.length === 2) {
    outputString = changeDetails.join(" and ");
  } else {
    outputString = changeDetails.slice(0, -1).join(", ") + ", and " + changeDetails[changeDetails.length - 1];
  }

  console.log(`For an amount of ${amount} ₼, the optimized change is: ${outputString}.`);
}
giveChange(369);
giveChange(25);
giveChange(100);
giveChange(4);