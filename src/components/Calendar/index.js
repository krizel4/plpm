import React, { Component, createRef, PureComponent } from 'react'
import { createPortal, flushSync } from 'react-dom'
import {
  Calendar
} from '@fullcalendar/core'
import {
  CustomRenderingStore
} from '@fullcalendar/core/internal'

const reactMajorVersion = parseInt(String(React.version).split('.')[0])
const syncRenderingByDefault = reactMajorVersion < 18

export default class FullCalendar extends Component {
  static act = runNow // DEPRECATED. Not leveraged anymore

  elRef = createRef()
  calendar
  handleCustomRendering
  resizeId
  isUpdating = false
  isUnmounting = false

  state = {
    customRenderingMap: new Map()
  }

  render () {
    const customRenderingNodes = []

    for (const customRendering of this.state.customRenderingMap.values()) {
      customRenderingNodes.push(
        <CustomRenderingComponent
          key={customRendering.id}
          customRendering={customRendering}
        />
      )
    }

    return (
      <div ref={this.elRef}>
        {customRenderingNodes}
      </div>
    )
  }

  componentDidMount () {
    this.isUnmounting = false

    const customRenderingStore = new CustomRenderingStore()
    this.handleCustomRendering = customRenderingStore.handle.bind(customRenderingStore)

    this.calendar = new Calendar(this.elRef.current, {
      ...this.props,
      handleCustomRendering: this.handleCustomRendering
    })
    this.calendar.render()

    this.calendar.on('_beforeprint', () => {
      flushSync(() => {
        // our `customRenderingMap` state will be flushed at this point
      })
    })

    let lastRequestTimestamp

    customRenderingStore.subscribe((customRenderingMap) => {
      const requestTimestamp = Date.now()
      const isMounting = !lastRequestTimestamp
      const runFunc = (
        syncRenderingByDefault ||
        isMounting ||
        this.isUpdating ||
        this.isUnmounting ||
        (requestTimestamp - lastRequestTimestamp) < 100
      )
        ? runNow
        : flushSync

      runFunc(() => {
        this.setState({ customRenderingMap }, () => {
          lastRequestTimestamp = requestTimestamp
          if (isMounting) {
            this.doResize()
          } else {
            this.requestResize()
          }
        })
      })
    })
  }

  componentDidUpdate () {
    this.isUpdating = true
    this.calendar.resetOptions({
      ...this.props,
      handleCustomRendering: this.handleCustomRendering
    })
    this.isUpdating = false
  }

  componentWillUnmount () {
    this.isUnmounting = true
    this.cancelResize()
    this.calendar.destroy()
  }

  requestResize = () => {
    if (!this.isUnmounting) {
      this.cancelResize()
      this.resizeId = requestAnimationFrame(() => {
        this.doResize()
      })
    }
  }

  doResize () {
    this.calendar.updateSize()
  }

  cancelResize () {
    if (this.resizeId !== undefined) {
      cancelAnimationFrame(this.resizeId)
      this.resizeId = undefined
    }
  }

  getApi () {
    return this.calendar
  }
}

// Custom Rendering
// -------------------------------------------------------------------------------------------------

class CustomRenderingComponent extends PureComponent {
  render () {
    const { customRendering } = this.props
    const { generatorMeta } = customRendering
    const vnode = typeof generatorMeta === 'function'
      ? generatorMeta(customRendering.renderProps)
      : generatorMeta

    return createPortal(vnode, customRendering.containerEl)
  }
}

// Util
// -------------------------------------------------------------------------------------------------

function runNow (f) {
  f()
}
