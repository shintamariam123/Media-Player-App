import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    //navigate to home page
    navigate('/home')
  }
  return (
    <>
      <div className='container mt-5'>
        <div className="header row align-items-center">
          <div className='col-lg-5'>
            <h3 style={{ height: '50px' }}>Welcome To <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Music Player is a platform where you can download and play the latest music for free in Hindi and other languages. Explore trending songs, top charts, podcasts, radio stations and more</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Landing Image" />
          </div>
        </div>
        <div className="features">
          <h3 className='text-center'>Features</h3>
          <div className='row'>
            <div className="col-lg-4">
              <Card>
                <Card.Img style={{ height: '435px' }} variant="top" src="https://i.gifer.com/origin/6d/6db3d77d8ff976feb206d7e7c64572a6.gif" />
                <Card.Body style={{ height: '120px' }}>
                  <Card.Title>Managing Videos </Card.Title>
                  <Card.Text>
                    User can upload,view and remove videos
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img style={{ height: '435px' }} variant="top" src="https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif" />
                <Card.Body style={{ height: '120px' }}>
                  <Card.Title>Categorize Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img style={{ height: '435px' }} variant="top" src="https://i.gifer.com/7S2.gif" />
                <Card.Body style={{ height: '120px' }}>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className=" row video border p-5 rounded mt-5 ">
          <div className="col-lg-5">
            <h3 className='text-warning '>Simple, Fast and Powerful</h3>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia optio repellendus quam cum non dolores voluptates quidem eveniet ab?  </p>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Categorize Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia optio repellendus quam cum non dolores voluptates quidem eveniet ab? </p>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia optio repellendus quam cum non dolores voluptates quidem eveniet ab? </p>


          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="560" height="370" src="https://www.youtube.com/embed/3P-t4WRoW5c?si=VQTxgjMyoumbvcsy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
        </div>
      </div>
      <hr />
    </>

  )
}

export default Landing