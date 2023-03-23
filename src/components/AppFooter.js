import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://t.me/onehanduz" target="_blank" rel="noopener noreferrer">
          onehand
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
