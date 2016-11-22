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

  // mapping arrays
  function _mapping(item) {
    function _from(arrayOfOrigin) {
      function _to(arrayOfDestination) {
        for(var i = 0; i < arrayOfOrigin.length; i++) {
          if(arrayOfOrigin[i] === item) {
            return arrayOfDestination[i];
          }
        }
        return null;
      }
      return { to: _to };
    }
    return { from: _from };
  }

  return {
    setValue: _setValue,
    getValue: _getValue
  };
}