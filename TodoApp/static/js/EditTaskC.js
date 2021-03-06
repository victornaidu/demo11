/* globals TodoApp */

(function() {

  TodoApp.EditTaskC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var EditTaskC = TodoApp.EditTaskC.prototype;
  var SharedC = Shared.SharedC.prototype;

  EditTaskC.handleAction = function(actionName, selectedObj, $e, targetController) {
    if (actionName === "submit") {
      this.doSubmitForm(selectedObj);
      return true;
    }
    return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };

  EditTaskC.doSubmitForm = function(selectedObj) {
    var postData = Trillo.stringify(this.getData());
    console.log("Will post: " + postData);

    $.ajax({
      url: "/ds/update/TodoApp/TaskList/task",
      type: 'post',
      data: postData,
      contentType: "application/json"
    }).done(function() {
      // normally we will call framework API to display a message to the user.
      alert("Form submitted successfully");
      return true;
    });

  }

  EditTaskC.postViewShown = function(view) {
    SharedC.postViewShown.call(this, view);
  };
})();