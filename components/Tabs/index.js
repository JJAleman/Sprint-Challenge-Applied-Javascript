// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabComponent (url) {
    const component = document.createElement('div');
    component.textContent = url; 
    component.classList.add('tab');

    return component
}



// Axios GET Request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((res) => {
    console.log(res);
    res.data.topics.forEach( url => {
        const component = tabComponent(url);
        tabComp.appendChild(component);
    })
})

const tabComp = document.querySelector('.topics');
