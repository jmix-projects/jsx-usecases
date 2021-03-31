import React from "react"

export const ComponentWithMap: React.FC = () => {
    
    const testedArr: number[] = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div>
            {testedArr.map((item) => {
                return (
                    <span>
                        I'am span. {item} element
                    </span>
                )
            })}
        </div>
    )
}
