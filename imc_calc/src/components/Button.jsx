import './Button.css'

const Button = ({id,text, action}) => {

  // executar função passada por parâmetro
  const handleAction = (e) => {
    action(e);
  };

  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}

export default Button
