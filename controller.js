(function() {

    function SetInfoController(MadService) {
        var vm = this;
        vm.addMadInfo = function(newInfo) {
            MadService.setMadInformation(newInfo);
        };
    }

    function GetInfoController(MadService) {
      var vm = this;
      vm.madInfo = MadService.getMadInformation();

    }

    angular 
      .module("app")
      .controller("GetInfoController", GetInfoController)
      .controller("SetInfoController", SetInfoController);

  })();