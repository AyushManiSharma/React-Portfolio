import React from 'react'
//importing icons
import Github from '@material-ui/icons/GitHub'
//importing styles
import '../styles/footer.css'

function footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href="https://github.com/AyushManiSharma"><Github /></a>
        </div>
    </div>
  )
}

export default footer