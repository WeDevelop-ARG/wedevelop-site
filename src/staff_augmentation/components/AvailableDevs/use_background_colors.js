function getBackgroundColor (color) {
  const colors = {
    yellow: 'rgba(255, 195, 49, 0.2)',
    gray: 'rgba(155, 155, 155, 0.1)',
    black: 'rgba(0, 0, 0, 0.1)',
    red: 'rgba(255, 0, 0, 0.1)',
    green: 'rgba(52, 201, 0, 0.1)',
    blue: 'rgba(0, 33, 152, 0.1)'
  }

  return colors[color]
}

export default getBackgroundColor
