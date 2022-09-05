const OnboardingStep = ({onboardingInfo, goNext, goPrev, showPrevBtn, showNextBtn,}) => {
    const {title, message} = onboardingInfo || {}
    
    return (
        <>
            <h3>{title}</h3>
            <div>{message}</div>
            { showPrevBtn && <button 
                style={{marginRight: '10px'}}
                onClick={() => goPrev()}
            >
                back
            </button>}
            { showNextBtn && <button onClick={() => goNext()}>next</button>}
        </>
    )
}

export default OnboardingStep