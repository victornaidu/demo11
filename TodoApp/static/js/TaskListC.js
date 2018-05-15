/* globals TodoApp */

(function() {

  TodoApp.TaskListC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var TaskListC = TodoApp.TaskListC.prototype;
  var SharedC = Shared.SharedC.prototype;

  TaskListC.handleAction = function(actionName, selectedObj, $e, targetController) {
    if (actionName === "edit") {
      this.showForm(selectedObj);
      return true;
    }
    return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };

  TaskListC.showForm = function showForm(selectedObj) {
    this.showView({
      name: "EditTask",
      container: "trillo-dialog2-container",
      data: selectedObj
    });
  };

  TaskListC.postViewShown = function(view) {
    SharedC.postViewShown.call(this, view);
  };
})();