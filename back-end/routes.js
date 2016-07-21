var appRouter = function(app) {

  var vacancy = [{
    description: 'a',
    status: 'open'
  },
  {
    description: 'b',
    status: 'cancelled'
  },
  {
    description: 'c',
    status: 'open'
  },
  {
    description: 'd',
    status: 'closed'
  },
  {
    description: 'e',
    status: 'cancelled'
  },
  {
    description: 'f',
    status: 'open'
  },
  {
    description: 'g',
    status: 'open'
  }];

  app.get("/vacancy", function(req, res) {
      res.send(vacancy);
  });

  app.get("/vacancy/status/:status", function(req, res) {
    res.send(vacancy.filter(function (item) {
      return (item.status === req.params.status);
    }));
  });

}

module.exports = appRouter;
