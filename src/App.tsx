import { 
  ConditionalComponent1,
  ConditionalComponent2,
  ConditionalComponent3,
  ConditionalComponent4,
  ConditionalComponent5,
  TernaryComponent,
  SwitchComponent
} from "./use-cases/conditions/ConditionalComponents";
import {ComponentWithMap} from "./use-cases/mapping/ComponentWithMap";
import {
  JsxElementsComponent,
  JsxArrayComponent
} from "./use-cases/jsx-element/JsxElementsComponent";
import {RenderFunctionComponent} from "./use-cases/render-function/RenderFunctionComponent"

function App() {
  return (
    <div className="App">
      <ConditionalComponent1 />
      <ConditionalComponent2 />
      <ConditionalComponent3 />
      <ConditionalComponent4 />
      <ConditionalComponent5 />
      <TernaryComponent />
      <SwitchComponent />
      <ComponentWithMap />
      <JsxElementsComponent />
      <JsxArrayComponent />
      <RenderFunctionComponent />
    </div>
  );
}

export default App;
