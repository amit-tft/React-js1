// const heading = React.createElement(
//   "h1",
//   { id: "head" },
//   "This is the heading "
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const divEle = React.createElement("div", { id: "divTag" }, [
  React.createElement("h1", { id: "h1Tag" }, "Content of h1"),
  React.createElement("h2", { id: "h2Tag" }, "Content of h2 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divEle);
