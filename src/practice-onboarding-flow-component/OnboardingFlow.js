import { useState, cloneElement, isValidElement, Children, useEffect } from 'react';

const OnboardingFlow = ({children }) => {
    const [flowState, setFlowState] = useState({
      currentIndex: 0,
      showNextBtn: false,
      showPrevBtn: false,
    })
    
    
    const goNext = () => {
        setFlowState((prev) => ({...prev, currentIndex: prev.currentIndex + 1}))
    }
    
    const goPrev = () => {
      setFlowState((prev) => ({...prev, currentIndex: prev.currentIndex - 1}))
    }
    
    const currentStep = Children.toArray(children)[flowState.currentIndex]
    
    
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (flowState.currentIndex == 0) {
          setFlowState({...flowState, showPrevBtn: false, showNextBtn: true})
        } else if(flowState.currentIndex === children.length - 1) {
          setFlowState({...flowState, showPrevBtn: true, showNextBtn: false})
        } else {
          setFlowState({...flowState, showNextBtn: true, showPrevBtn: true})
      }
        
      }, 100)
      
      return () => clearTimeout(timeoutId)
    }, [flowState.currentIndex])
    
    
 if(typeof currentStep.type === 'function'){
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