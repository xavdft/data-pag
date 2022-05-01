/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/
// I decided to set two important global variables here in an attempt to save space within later functions
const linkList = document.querySelector('.link-list');
const studentList = document.querySelector('.student-list');


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list , page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  studentList.innerHTML = '';
  for (let i = 0; i < list.length; i ++) {
    if ( i >= startIndex && i < endIndex) {
      let pickStudent = data[i];
      let studentItem = `<li class = 'student-item cf'>
      <div class='student-details'>
      <img class ='avatar' src ='${pickStudent.picture.large}' alt ='Profile Picture'>
      <h3>${pickStudent.name.first} ${pickStudent.name.last}</h3> <span class ='email'>${pickStudent.email}</span>
      </div>
      <div class ='joined-details'>
      <span class ='date'>${pickStudent.registered.date}</span>
      </div>
      </li> `;

      studentList.insertAdjacentHTML('beforeend', studentItem);
    }
  }
}

showPage(data, 1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  numOfPages = Math.ceil(list.length / 9);
  linkList.innerHTML = '';
  // this for loop is made to show correct number of pages, earlier I missed the equals sign on line 54, which did not display the correct number of students. The equals sign is essential to get 5 pages where the 5th page displays the remaining 6 students
  for (let i = 1; i <= numOfPages; i++) {
    let button = `<li>
    <button type ='button'>${i}</button>
    </li>`;

    linkList.insertAdjacentHTML('beforeend', button);
    let currentActivePage = document.querySelector('button[type="button"]');
    currentActivePage.className = 'active';
  }
// this creates the event listener for our pagination button
linkList.addEventListener('click', function (e)  {
// we need to set our buttons to active or inactive, or simply remove the active attribute. this is important so the same pagination button can not be clicked twice as it would do nothing
  if (e.target.tagName == 'BUTTON') {
    let firstElement = document.querySelector('.active');
    firstElement.className = '';

    e.target.className = 'active';
    let page = e.target.textContent;
    showPage(list, page);
  }
  });
}


// Call functions
addPagination(data);
