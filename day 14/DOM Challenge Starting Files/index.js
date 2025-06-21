// document.querySelectorAll('.list').forEach((list)=>{
//   list.style.color='red';  
// });
// document.querySelector('a').style.color='red';
let layout = document.getElementById('layout');
fetch('data.json')
  .then(response => response.json())
  .then(data => {
        // console.log(typeof data);
        let html = '';
        for(item in data) {
            console.log(item);
            console.log(data[item]);
          html += `<div class="list">
                      <h2>${data[item].name}</h2>
                      <p>${data[item].description}</p>
                        <p>Price: $${data[item].price}</p>
                        <p>Category: ${data[item].category}</p>
                    </div>`;
        }
        layout.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });

// "chicken": {
//       "name": "Chicken",
//       "description": "A delicious source of protein.",
//       "price": 5.99,
//       "category": "meat"
//    },