// const heading=React.createElement("h1",
// {id:"heading", xyz:'abc'},"Hello world from React");
//creating a element is a core thing of react so it comes from react.development
const heading = React.createElement("div", {
    id: "Parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'm h1 tags"),
        React.createElement("h2", {}, "I'm h2 tags")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'm h1 tags"),
        React.createElement("h2", {}, "I'm h2 tags")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//but now creating a root when we are creating a root and rendering something inside
root.render(heading); //if you want to make nasted like this:
 // <div id="parent">
 //     <div id="child">
 //         <h1></h1>
 //         <h2></h2>
 //     </div>
 //     <div id="child2">
 //         <h1></h1>
 //         <h2></h2>
 //     </div>
 // </div>

//# sourceMappingURL=index.6bd02f5a.js.map
