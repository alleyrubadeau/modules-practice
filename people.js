
module.exports = {

  fullName: function (first, last) {
    return first + ' ' + last;
  },
  middleName: function (middle) {
    return middle;
  }

};

module.exports.fullName("alley", "rubadeau");
