var divSimpleLoadingIndicator

require('./SimpleLoadingIndicator.css')

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

SimpleLoadingIndicator.setActive = function () {
  this.init()
  this.active = true

  divSimpleLoadingIndicator.className = 'loading'
  this.setValue(0)
}

SimpleLoadingIndicator.setInactive = function () {
  this.init()
  this.active = false

  setTimeout(function () {
    if (!this.active) {
      divSimpleLoadingIndicator.className = ''
    }
  }.bind(this), 200)
}

SimpleLoadingIndicator.setValue = function (value) {
  this.init()

  this.value = value
  divSimpleLoadingIndicator.firstChild.style.width = (value * 100.0) + '%'
}

module.exports = SimpleLoadingIndicator
