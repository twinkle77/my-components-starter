export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}

export function getElementRect(el) {
  const elRect = el.getBoundingClientRect()
  return {
    left: elRect.left,
    top: elRect.top,
    right: elRect.right,
    bottom: elRect.bottom,
    width: elRect.width || elRect.right - elRect.left,
    height: elRect.height || elRect.bottom - elRect.top
  }
}
