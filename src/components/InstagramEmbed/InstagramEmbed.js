import React, { useEffect, useRef } from 'react'

export default function InstagramEmbed ({
  url,
  maxWidth = 540,
  minWidth = 326,
  align = 'center'
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const STYLE_ID = 'ig-embed-overrides'
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style')
      style.id = STYLE_ID
      style.textContent = `
        /* Hide caption, feedback, social proof inside IG embeds */
        .instagram-media .Caption {
          display: none !important;
        }
      `
      document.head.appendChild(style)
    }

    const ensureScript = () =>
      new Promise((resolve) => {
        if (window.instgrm?.Embeds) return resolve()
        let s = document.querySelector(
          'script[src="//www.instagram.com/embed.js"]'
        )
        if (s) { return s.addEventListener('load', () => resolve(), { once: true }) }
        s = document.createElement('script')
        s.src = '//www.instagram.com/embed.js'
        s.async = true
        s.onload = () => resolve()
        document.body.appendChild(s)
      })

    const hardHide = () => {
      if (!ref.current) return
      ref.current
        .querySelectorAll('.Feedback,.SocialProof,.Caption')
        .forEach((el) => (el.style.display = 'none'))
    }

    ensureScript().then(() => {
      try {
        window.instgrm?.Embeds?.process?.(ref.current)
      } finally {
        hardHide()
        const mo = new MutationObserver(hardHide)
        mo.observe(ref.current, { childList: true, subtree: true })
        return () => mo.disconnect()
      }
    })
  }, [url])

  const style = {
    background: '#FFF',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
    margin: align === 'center' ? '1px auto' : '1px',
    maxWidth: `${maxWidth}px`,
    minWidth: `${minWidth}px`,
    padding: 0,
    width: 'calc(100% - 2px)'
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <blockquote
        ref={ref}
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={style}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
    </div>
  )
}
