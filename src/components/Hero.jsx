import hero from '../assets/hero-img.png'

function Hero() {
    return (
    <div className="hero">
        <div className='photogrid'>
            <img src={hero}/>
        </div>
        <h1> Online Experiences </h1>        
        <p> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
    </div>
    )
  }

export default Hero