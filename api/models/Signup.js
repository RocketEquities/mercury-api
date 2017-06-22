/**
 * Signup.js
 *
 */

module.exports = {
  tableName: "signups",

  attributes: {
    email: {
      type: "email",
      required: true,
      unique: true
    },
    createdAt: {
      type: "datetime",
      columnName: "created_at"
    },
    updatedAt: {
      type: "datetime",
      columnName: "updated_at"
    }
  }
};

