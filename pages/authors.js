import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showAuthors = (array) => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  if (array.length < 1) {
    domString += '<p>No Authors Found</p>';
    console.warn('I am here');
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
@@ -27,7 +31,8 @@ const showAuthors = (array) => {
      </div>
    </div>
    `;
    });
  }
  renderToDOM('#store', domString);
};

export { showAuthors, emptyAuthors };
