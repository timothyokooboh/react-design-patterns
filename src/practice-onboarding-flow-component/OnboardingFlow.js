import { useState, cloneElement, isValidElement, Children, useEffect } from 'react';

const OnboardingFlow = ({children }) => {
    const [flowState, setFlowState] = useState({
      currentIndex: 0,
      showNextBtn: true,
      showPrevBtn: true,
    })
    
    
    const goNext = () => {
        setFlowState((prev) => ({...prev, currentIndex: prev.currentIndex + 1}))
    }
    
    const goPrev = () => {
      setFlowState((prev) => ({...prev, currentIndex: prev.currentIndex - 1}))
    }
    
    const currentStep = Children.toArray(children)[flowState.currentIndex]
    
    useEffect(() => {
      if (flowState.currentIndex == 0) {
        setFlowState({...flowState, showPrevBtn: false})
      } else {
        setFlowState({...flowState, showPrevBtn: true})
      }
      
      if (flowState.currentIndex === children.length - 1) {
        setFlowState({...flowState, showNextBtn: false})
      } else {
        setFlowState({...flowState, showNextBtn: true})
      }
    }, [flowState])
    
 if(isValidElement(currentStep)){
        return (
          cloneElement(currentStep, 
          {
            goNext, 
            goPrev, 
            showPrevBtn: flowState.showPrevBtn,
            showNextBtn: flowState.showNextBtn
          })
        )
 }
 return currentStep;
}

export default OnboardingFlow