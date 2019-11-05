import React from "react";

// const Pet = ({name, animal, breed}) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, name),
//         React.createElement("h2", {}, animal),
//         React.createElement("h2", {}, breed)
//     ]);
// };

// we will export the function

export default function Pet({name, animal, breed}) {
    return React.createElement("div", {id: "something-important"}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};