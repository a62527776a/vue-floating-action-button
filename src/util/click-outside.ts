import { DirectiveOptions } from 'vue'

class TriggerEvent {
  el: HTMLElement
  binding: any
  constructor (el: HTMLElement, binding: any) {
    this.el = el
    this.binding = binding
  }
  contains (e: Event) {
    if (triggerEvent) {
      if (e.target) {
        if (triggerEvent.el.contains(e.target as HTMLElement)) {
          return
        }
        if (triggerEvent.binding) {
          triggerEvent.binding.value()
        }
      }
    }
  }
}

let triggerEvent: TriggerEvent | null

export const clickOutside: DirectiveOptions = {
  bind: (el: HTMLElement, binding: any): void => {
    if (triggerEvent) return
    triggerEvent = new TriggerEvent(el, binding)
    document.body.addEventListener('touchstart', triggerEvent.contains, true)
    document.body.addEventListener('click', triggerEvent.contains, true)
  },
  unbind: (): void => {
    if (triggerEvent) {
      document.body.removeEventListener('touchstart', triggerEvent.contains, true)
      document.body.removeEventListener('click', triggerEvent.contains, true)
      triggerEvent = null
    }
  }
}
