import steps from './images/steps.png'
import logo from './images/skillit.png'

export default function App() {
    return (
        <>
            <div className='App'>
                <img className="steps" src={steps} />
                <img className="logo" src={logo} />
                <h2>COMPETENCE</h2>
                <h2>ASSESSMENT</h2>
                <h2>FORM</h2>
                <button>SSO <span>&gt;</span> </button>
            </div>
        </>
    )
}