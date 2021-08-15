import './styles.scss';
import EquationImage from '../../../../assets/Equation.png';

export interface IEquationProps { }

const Equation = () => {
    return <div className={"equationContainer"}>
        <div className={"equationTitle"}>
            {`Our Base Equation`}
        </div>
        <img src={EquationImage} alt="equation" />
    </div >;
}

export default Equation;