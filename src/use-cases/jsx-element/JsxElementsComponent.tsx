import React from "react"

export const JsxElementsComponent: React.FC = () => {
    
    const customJsx: JSX.Element = <span>I'am span. custom jsx element</span>

    return (
        <div>
            {customJsx}
        </div>
    )
}

export const JsxArrayComponent: React.FC = () => {

    const customJsxElements: JSX.Element[] = [
        <span key={0}>
            I'am span. custom jsx element
        </span>,
        <p key={1}>
            I'am p. custom jsx element
        </p>,
        <strong key={2}>
            I'am strong. custom jsx element
        </strong>
    ]

    return (
        <div>
            {customJsxElements}
        </div>
    )
}
