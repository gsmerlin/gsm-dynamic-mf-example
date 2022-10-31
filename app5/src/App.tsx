import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Text from "library/Text";
import InputWithButton from "library/InputWithButton";

const App = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Text variant={"info"} size={"h1"}>APP5</Text>
        <div style={{maxWidth: "80%", textAlign: "center"}}>
            <Text variant={"primary"} size={"h3"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis quam, lobortis ac elit in, consectetur laoreet sapien. Etiam porttitor accumsan leo eget viverra. Praesent id luctus purus. Nullam orci nisi, consequat vulputate tortor sed, dictum placerat augue. Nulla vel lobortis est, non maximus nibh. Ut eget turpis tempus, gravida enim maximus, mattis arcu. Maecenas ornare semper lectus ut lacinia. Quisque fermentum ligula pretium tortor dictum feugiat. Etiam non diam quis erat eleifend eleifend. Vestibulum vel finibus sapien, nec suscipit felis. Nam feugiat mauris in urna ornare gravida. Praesent blandit metus et rutrum tincidunt. Aliquam facilisis feugiat viverra. Cras vehicula, felis et dapibus sodales, sapien odio sollicitudin ex, eu feugiat arcu elit et neque. </Text>
        </div>
        <InputWithButton variant={"warning"} label={"Submit!"} placeholder={"Some text..."} />
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
