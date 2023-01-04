let counter, add, sub, currentNum;

counter = document.getElementById('counter');
counterContent = document.getElementById('counter').innerHTML;



function addInput(){
    let input = document.getElementById('numInput').value;
    
    addOnTopOf = parseInt(counterContent) + parseInt(input);
    counter.innerHTML = String(addOnTopOf);
    counterContent = String(addOnTopOf);
    (counterContent.includes('-',0)) ? counter.style.color = 'red' : counter.style.color = 'black';
}

function subInput(){    
    let input = document.getElementById('numInput').value;
    
    subOnTopOf = parseInt(counterContent) - parseInt(input);
    counter.innerHTML = String(subOnTopOf);
    counterContent = String(subOnTopOf);
    (counterContent.includes('-',0)) ? counter.style.color = 'red' : counter.style.color = 'black';
}

