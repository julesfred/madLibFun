(function() {
    function MadService($location) {
      var madInfo = {};

      return {
        setMadInformation: setMadInformation,
        getMadInformation: getMadInformation
      };
  
      function setMadInformation(newInfo) {
        madInfo = newInfo;
        $location.path("/madLibResult");
      }
  
      function getMadInformation() {
        return madInfo;
      }
    }
  
    angular
      .module("app")
      .factory("MadService", MadService);
  })();