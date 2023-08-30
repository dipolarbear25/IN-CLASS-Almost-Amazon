import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;
  //            app now have all of the div's above put into it, navigation is seperatted because it's going to stay on top of the page.
  renderToDOM('#app', domString);
};

export default domBuilder;
