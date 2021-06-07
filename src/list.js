
import "core-js/stable"; // <- at the top of your entry point
import "regenerator-runtime/runtime";
const postList = document.querySelector('#postList');
const ul = document.createElement('ul');

export const getPosts = async(url)=>{
    const response = await fetch(url);
    if(response.status !=200){
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();
    return data;

};

export const listTemplate = datas =>{
    datas.map(data =>{
        const html= `
            <li style="background:${data.completed?`skyblue`:`pink`}">
                <h3>${data.title}</h3>
            </li>
        `;
        ul.innerHTML += html;
    });
    postList.appendChild(ul);
    //filterList();
};

export const filterList = term =>{
    Array.from(ul.children).filter(item=>!item.textContent.includes(term))
        .forEach(item=>item.classList.add("filtered"));

    Array.from(ul.children).filter(item=>item.textContent.includes(term))
        .forEach(item=>item.classList.remove("filtered"));
}

export const getCompleteCount = datas=>{
    const newArr = datas.reduce((acc,curObj)=>{
        console.log(acc,curObj.completed,acc[curObj.completed])
        acc[curObj.completed] = (acc[curObj.completed]||0)+1;
        return acc;
    },{});
    console.log(newArr)
    return newArr;
}