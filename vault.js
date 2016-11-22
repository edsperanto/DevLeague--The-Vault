'use strict';
module.exports = function() {
  var keys = [];
  var values = [];

  // set value
  function _setValue(newKey, newValue) {
    keys.push(newKey);
    values.push(newValue);
  }

  // get value
  function _getValue(keyName) {
    return _mapping(keyName).from(keys).to(values);
  }

  return {
    setValue: _setValue,
    getValue: _getValue
  };
}