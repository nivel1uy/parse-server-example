
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.beforeSave("_User", function(request, response) {
    request.object.set("email", "a@siodgs.com");

    response.success();
});
