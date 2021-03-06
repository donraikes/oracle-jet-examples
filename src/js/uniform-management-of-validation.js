'use strict';

requirejs.config({
  baseUrl: 'js',

  // Path mappings for the logical module names
  // Update the main-release-paths.json for release mode when updating the mappings
  paths:
  //injector:mainReleasePaths
  {
    'knockout': 'libs/knockout/knockout-3.4.2.debug',
    'jquery': 'libs/jquery/jquery-3.3.1',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1',
    'promise': 'libs/es6-promise/es6-promise',
    'hammerjs': 'libs/hammer/hammer-2.0.8',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
    'ojs': 'libs/oj/v6.0.0/debug',
    'ojL10n': 'libs/oj/v6.0.0/ojL10n',
    'ojtranslations': 'libs/oj/v6.0.0/resources',
    'text': 'libs/require/text',
    'signals': 'libs/js-signals/signals',
    'customElements': 'libs/webcomponents/custom-elements.min',
    'proj4': 'libs/proj4js/dist/proj4-src',
    'css': 'libs/require-css/css',
    'touchr': 'libs/touchr/touchr'
  }
    //endinjector
});

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojlabel', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojvalidationgroup'],
  function(oj, ko, $) { // this callback gets executed when all required modules are loaded

    function ViewModel() {
      var self = this;

      // to show the oj-validation-group's valid property value
      self.groupValid = ko.observable();

      self.contactNumbers = ko.observableArray([{ type: ko.observable('home') }]);

      // Adds a new contact number object to the beginning of the array. 
      self.addContactNumber = function() {
          self.contactNumbers.push({ type: ko.observable('') });
      };

      // Removes a contact number   
      self.removeContactNumber = function(event, current, bindingContext) {
        self.contactNumbers.remove(current.data);
      };

      self.createNewMember = function() {
        var tracker = document.getElementById("tracker");

        tracker.showMessages();
        if (tracker.valid === "invalidShown") {
          tracker.focusOn("@firstInvalidShown");
        }
      };

    }

    $(function() {
      ko.applyBindings(new ViewModel());
    });

});