import React from "react"

export const ConditionalComponent1: React.FC = () => {
    const rndNmb = Math.random() * 4;

    if (rndNmb > 0 && rndNmb < 1) {
        return <div>I'm div. between 0 and 1 </div>
    } else if (rndNmb > 1 && rndNmb < 2) { 
        return <span>I'm span. between 1 and 2 </span>
    } else if (rndNmb > 2 && rndNmb < 3) {
        return <p> I'm p. between 2 and 3 </p>
    } else {
        return <strong> I'm strong. between 3 and 4 </strong>
    }
}

export const ConditionalComponent2: React.FC = () => {
    const rndNmb = Math.random() * 4;

    if (rndNmb > 0 && rndNmb < 1) {
        return <div>I'm div. between 0 and 1 </div>
    } else if (rndNmb > 1 && rndNmb < 2) {
        return <span>I'm span. between 1 and 2 </span>
    } else if (rndNmb > 2 && rndNmb < 3) {
        return <p> I'm p. between 2 and 3 </p>
    }

    return <strong> I'm strong. between 3 and 4 </strong>
}

export const ConditionalComponent3: React.FC = () => {
    const rndNmb = Math.random() * 4;

    if (rndNmb > 0 && rndNmb < 1) {
        return <div>I'm div. between 0 and 1 </div>
    } else {
        return <strong> I'm strong. more than 1 </strong>
    }
}

export const ConditionalComponent4: React.FC = () => {
    const rndNmb = Math.random() * 4;

    if (rndNmb > 0 && rndNmb < 1) {
        return <div>I'm div. between 0 and 1 </div>
    }

    return <strong> I'm strong. more than 1 </strong>

}

export const ConditionalComponent5: React.FC = () => {
    const rndNmb = Math.random() * 4;
    return (
        <div>
            {
                rndNmb > 0 && (
                    <span>I'm span</span>
                )
            }
        </div>
    )
}

export const TernaryComponent: React.FC = () => {

    const rndCondition: boolean = Math.random() > 0.5;

    return (
        <div>
            {rndCondition ? <p>I'am p. true condition </p> : <span>I'am span. false condition</span>}
        </div>
    )
}

export const SwitchComponent: React.FC = () => {

    const lettersArr: string[] = ['a','b','c']
    const rndNmb: number = Math.floor(Math.random() * Math.floor(4));
    const rndCase: string = lettersArr[rndNmb]

    switch (rndCase) {
        case 'a': return <div>I'am div. case a</div>
        case 'b': return <span>I'am span. case b</span>
        case 'c': return <p>I'am p. case c</p>
        default: return <strong>I'am strong. default case</strong>
    }
}
