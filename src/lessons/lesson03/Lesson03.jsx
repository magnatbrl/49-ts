import MyButton from "../../components/myButton/MyButton";

function Lesson03() {
  const handleClick = () => {
    console.log('click!');

  }

  const handleSubmit = () => {
    console.log('submit!');

  }

  const handleReset = () => {
    console.log('reset!');

  }

  return (
    <div className="lesson-container">
      <h2>lesson 03</h2>
      <p>React props</p>
      <p>sposob peredachi danih</p>
      <div>
        <MyButton myType={'click'} text={'Click'} func={handleClick} isDanger={true} />
        <MyButton myType={'submit'} text={'Submit'} func={handleSubmit} isDanger={false} />
        <MyButton myType={'reset'} text={'Reset'} func={handleReset} isDanger={true} />
      </div>
    </div>
  )
}

export default Lesson03;