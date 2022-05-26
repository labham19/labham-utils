import React from 'react'

export default function About(props) {

    let myStyle = {
        backgroundColor:props.mode==='light'?'azure':'rgb(00,00,00,0.4)',
        color:props.mode==='light'?'black':'white'
    }
  return (
    <div className='container my-3' >
        <h1 style={myStyle}>About</h1>
        <div className="accordion accordion-flush"  id="accordionFlushExample">
            <div className="accordion-item" >
                <h2 className="accordion-header" id="flush-headingOne">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div style={myStyle} id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">This app can be used to convert text into <strong>Uppercase</strong>, <strong>Lowercase</strong>, <strong>Capitalized</strong> format or even <strong>Copy To Clipboard</strong> the given text.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Free to use
                </button>
                </h2>
                <div style={myStyle} id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">This app is completely <strong>Free To Use</strong></div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Made By :- 
                </button>
                </h2>
                <div style={myStyle} id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> This app has been build by Labham Malik 4b Bca, VSIT, On 26th may 2022</div>
                </div>
            </div>
            </div>
    </div>
  )
}
