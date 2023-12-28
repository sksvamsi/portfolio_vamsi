import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio-pic" />
          </div>
          <h3>JewelleryMall Demo</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sksvamsi/Ihubtalent" className='btn'>Github</a>
            <a href="https://sksvamsi.github.io/Ihubtalent/jewellery" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio-pic" />
          </div>
          <h3>FoodMunch Demo</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sksvamsi/foodmunch" className='btn'>Github</a>
            <a href="https://sksvamsi.github.io/foodmunch/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio-pic" />
          </div>
          <h3>Javascript Dynamic demo</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sksvamsi/catdynamicpage" className='btn'>Github</a>
            <a href="https://sksvamsi.github.io/catdynamicpage/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio-pic" />
          </div>
          <h3>IhubTalent Demo</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sksvamsi/IhubTalentDemo" className='btn'>Github</a>
            <a href="https://sksvamsi.github.io/IhubTalentDemo/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio

