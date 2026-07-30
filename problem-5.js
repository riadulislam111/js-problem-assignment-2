/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (!Array.isArray(times)) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }
   
 let total = times[0];
    for (let i = 1; i < times.length; i++) {
        if(typeof times[i] !== "number"){
            return "Invalid"
        }
        total += times[i];
    }
   
  return total / times.length;
}

// console.log(averageResponseTime([120, 200, 150, 130]));
// console.log(averageResponseTime([100, 100]));
// console.log(averageResponseTime("logs"));
// console.log(averageResponseTime([120, "200", 150]));
// console.log(averageResponseTime([]));
