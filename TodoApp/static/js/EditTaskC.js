/* globals TodoApp */

(function() {

  TodoApp.EditTaskC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var EditTaskC = TodoApp.EditTaskC.prototype;
  var SharedC = Shared.SharedC.prototype;
  var Controller = Trillo.Controller.prototype;


  EditTaskC.handleAction = function(actionName, selectedObj, $e, targetController) {
    if (actionName === "submit") {
      this.doSubmitForm(selectedObj);
      this.close();
    }
    if (actionName === "cancel") {
      this.close();
      return true;
    }
    //return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
    return Controller.handleAction.call(this, actionName, selectedObj);
  };

  EditTaskC.doSubmitForm = function(selectedObj) {
    var postData = Trillo.stringify(this.getData());

    $.ajax({
      url: "https://rt.trillo.io/ds/update/TodoApp/TaskList/task",
      type: 'post',
      data: postData,
      contentType: "application/json"
    }).done(function() {
      // normally we will call framework API to display a message to the user.
      console.log("Form submitted successfully");
      return true;
    });
  };

  EditTaskC.postViewShown = function(view) {
    SharedC.postViewShown.call(this, view);
  };
  return true;
})();