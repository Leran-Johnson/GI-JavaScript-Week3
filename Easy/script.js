function exerciseOfTheDay() {
    let dailyExercise = "Rest";
  
   
    function setExercise(exercise) {
      if (exercise) {
        dailyExercise = exercise;
        console.log(`Today's exercise: ${dailyExercise}`);
      } else {
        console.log(`Today's exercise: ${dailyExercise}`);
      }
    }
  
    return setExercise;
  }
  
  let exercise = exerciseOfTheDay();
  
  exercise()
  exercise("Run!!!")
  