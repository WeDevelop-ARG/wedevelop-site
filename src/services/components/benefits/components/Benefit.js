function Benefit({ className, image, text }) {
  return (
    <div className={className}>
      <img src={image} alt="" />
      <p>{text}</p>
    </div>)
}

export default Benefit
