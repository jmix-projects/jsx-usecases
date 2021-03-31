import React from "react"

export const RenderFunctionComponent: React.FC = () => {
    
    const customRenderFunction = () => {
        return (
            <span>
                span from custom render function
            </span>
        )
    }

    return (
        <div>
            {customRenderFunction()}
        </div>
    )
}
