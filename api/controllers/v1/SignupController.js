/**
 * SignupController
 *
 */

module.exports = {
	index: function(req, res) {
    Signup.find().exec(function(err, signups) {
      if (err) {
        return res.apiError(err);
      }

      res.apiSuccess(signups);
    });
  },

  //----------------------------------------------------------------------------

	create: function(req, res) {
    var entry = {
      email: req.param("email")
    };

    Signup.create(entry).exec(function(err, signup) {
      if (err) {
        return res.apiError(err);
      }

      res.apiSuccess(signup);
    });
  }
};

