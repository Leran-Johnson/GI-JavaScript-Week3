function createPII(name, ssn) {
    var privateName = name;
    var privateSSN = ssn;

    function getName() {
      return privateName;
    }
    function getSSN() {
      return privateSSN;
    }
  
    // Return an object that exposes the getName method
    return {
      getName: getName,
    };
  }
  
  var patient = createPII("Viego", "666-66-6666");
  
  // Attempt to access the properties and methods
  console.log(patient.names); 
  console.log(patient.ssn);   
  console.log(patient.getName());
  console.log(patient.getSSN()); 
  