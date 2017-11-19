(function () {
    angular
        .module("app", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider

            .when("/home", {
                template:`
                <div class="madLibForm">
                <h1>MadLib</h1>
                </div>
                `
            })
            .when("/madLibForm", {
                template: `
                <div class="madLibForm">
                <input ng-model="mad.madInfo.person" placeholder="name">
                <input ng-model="mad.madInfo.adjective" placeholder="adjective">
                <input ng-model="mad.madInfo.color" placeholder="color">
                <input ng-model="mad.madInfo.place" placeholder="place">
                <button ng-click="mad.addMadInfo(mad.madInfo);">Enter</button>
                </div>
                `,
                controller: "SetInfoController as mad"
              })
              .when("/madLibResult", {
                template: `
                <div class="madLibForm">
                <p> Once upon a time, there was a Princess named, {{ mad.madInfo.person }}. She went off to a very {{ mad.madInfo.adjective }} forest and discovered something quite magical. There she found a {{ mad.madInfo.color }} hippo in a tutu. Princess {{ mad.madInfo.person }} took the hippo to {{ mad.madInfo.place }} and showed it to all her friends and family.</p>
                </div>`,
                controller: "GetInfoController as mad"
              })

            .otherwise({ redirectTo: "/home" });
        });
})();