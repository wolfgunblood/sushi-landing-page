import "./SubscriptionBox.scss";

const SubscriptionBox = () => {
  return (
    <section className='subscription-box-container'>
      <h2 className='subscription-box-title'>Get offers straight <br /> to your inbox</h2>
      <p className='subscription-box-text'>Sign Up for the NewsLetter</p>
      <div className='subscription-box-input-container'>
        <input type="text" placeholder='Ennter Your Email'/>
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default SubscriptionBox