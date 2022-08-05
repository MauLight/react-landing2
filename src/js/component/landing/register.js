import React from 'react';
import { Link } from 'react-scroll';

const Register = () => {
    return (
        <>
            <div className="Head" id="FirstHead">
            <button type="button" class="btn btn-dark">
            <Link to="Reg" spy={true} smooth={false} offset={-200} duration={500} >Sign up</Link>
            </button>


                <div className="form" id='Reg'>
                    <input className="form-control form-control-sm" type="text" placeholder="..." />
                    <input className="form-control form-control-sm" type="text" placeholder="..." />
                    <input className="form-control form-control-sm" type="text" placeholder="..." />
                </div>
                <div className="button">
                    <button type="button" className="btn btn-dark">
                    <Link to="one" spy={true} smooth={false} offset={-200} duration={500} >Something</Link>
                    </button>
                    <button type="button" className="btn btn-dark">
                    <Link to="one" spy={true} smooth={false} offset={-200} duration={500} >Something</Link>
                    </button>
                </div>
            </div>
        </>

    )
}

export default Register