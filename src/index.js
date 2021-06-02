/*함수실행 및 이벤트 리스너*/
import {getPosts,listTemplate,filterList,getCompleteCount} from './list';

const search = document.querySelector('.search input');

getPosts('https://jsonplaceholder.typicode.com/todos')
    .then(data=>{listTemplate(data);getCompleteCount(data);})
    .catch(err=>console.log(err.message));
    
search.addEventListener('keyup', () =>{
    filterList(search.value)
    
})

