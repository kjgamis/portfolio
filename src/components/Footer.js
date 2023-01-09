import React from "react"

const Footer = () => {
  const portfolioData = {
    social: [
      {
        'name': 'github',
        'url': 'https://github.com/kjgamis',
        'class': 'fab fa-github'
      },
      {
        'name': 'linkedin',
        'url': 'https://www.linkedin/in/kjgamis',
        'class': 'fab fa-linkedin'
      }
    ]
  }
    const networks = portfolioData.social.map((network) => {
      return (
        <span key={network.name} className="m-4">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.class}></i>
          </a>
        </span>
      )
    })

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>
        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy; Kage Gamis
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
