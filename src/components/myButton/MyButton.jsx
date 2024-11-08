import './myButton.css'

function MyButton({ func, isDanger = false, text = 'click', type = 'button' }) {
  return (
    <button myType={type} onClick={func} className={`my-Button ${isDanger ? 'btn-danger' : 'btn-primary'}`}>{text}
    </button>);
}

export default MyButton;