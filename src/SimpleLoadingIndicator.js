var divSimpleLoadingIndicator

require('./SimpleLoadingIndicator.css')

/**
 * SimpleLoadingIndicator classs
 * @constructor
 * @property {boolean} active - loading currently active
 * @property {number} value - current loading value
 */
function SimpleLoadingIndicator () {
}

SimpleLoadingIndicator.init = function () {
  if (!divSimpleLoadingIndicator) {
    divSimpleLoadingIndicator = document.createElement('div')
    divSimpleLoadingIndicator.id = 'SimpleLoadingIndicator'
    document.body.appendChild(divSimpleLoadingIndicator)

    divSimpleLoadingIndicator.appendChild(document.createElement('div'))

    this.value = 0
  }
}

/**
 * loading active - show the loading indicator
 */
SimpleLoadingIndicator.setActive = function () {
  this.init()
  this.active = true

  divSimpleLoadingIndicator.className = 'loading'
  this.setValue(0)
}

/**
 * loading inactive - hide the loading indicator
 */
SimpleLoadingIndicator.setInactive = function () {
  this.init()
  this.active = false

  setTimeout(function () {
    if (!this.active) {
      divSimpleLoadingIndicator.className = ''
    }
  }.bind(this), 200)
}

/**
 * set the value of the loading indicator to the specified value
 * @param {number} value - Current value between 0.0 and 1.0 (e.g. 0.5 => 50%.)
 */
SimpleLoadingIndicator.setValue = function (value) {
  this.init()

  this.value = value
  divSimpleLoadingIndicator.firstChild.style.width = (value * 100.0) + '%'
}

module.exports = SimpleLoadingIndicator
