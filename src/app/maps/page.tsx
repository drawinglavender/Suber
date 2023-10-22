
const Page = () => {
  return (
    <div className=''>
      <title>Page</title>
      <h1>Drivers Near You</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.910469707908!2d-122.92245285885916!3d49.278093671511115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679c0857a2227%3A0x506c3f6e30b55b!2sSimon%20Fraser%20University!5e0!3m2!1sen!2sca!4v1697921731439!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Page


