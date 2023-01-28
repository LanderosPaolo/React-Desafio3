import Button from 'react-bootstrap/Button';

const ButtonA = (props) => {
    return (
        <Button disabled={props.disable} type="submit" value="Submit">
            Agregar Colaborador
        </Button>
    )
}

export default ButtonA;