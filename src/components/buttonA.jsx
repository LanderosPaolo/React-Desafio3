import Button from 'react-bootstrap/Button';


const ButtonA = (props) => {
    const handleClick = () => {
        props.setDisable(true);
    }
    return (
        <Button disabled={props.disable} type="submit" value="Submit" onClick={handleClick}>
            Agregar Colaborador
        </Button>
    )
}

export default ButtonA;