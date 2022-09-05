import Users from "./practice_react-scoped-slots/Users";
import User from "./practice_react-scoped-slots/User";
import OnboardingFlow from './practice-onboarding-flow-component/OnboardingFlow'
import OnboardingStep from './practice-onboarding-flow-component/OnboardingStep'
import "./styles.css";
// import { useState } from "react";

const onboardingStepsData = [
    {
        title: 'step one',
        message: 'this is step one'
    },
    {
        title: 'step two',
        message: 'this is step two'
    },
    {
        title: 'step three',
        message: 'this is step three yes'
    },
]

export default function App() {
     const childComponents = onboardingStepsData.map((step, i) => {
               return (
                    <OnboardingStep 
                        key={i}
                        onboardingInfo={step}
                    />) 
                })
        
  return (
    <div className="App">
        <OnboardingFlow >
            {childComponents}
        </OnboardingFlow>
      {/*<Users>
        <User></User>
        <div>anything goes here</div>
      </Users>*/}
    </div>
  );
}
