export default function adjustNews(){
    const news = document.getElementsByClassName("news")[0] as HTMLElement;
    const [height, width] = [news.offsetHeight, news.offsetWidth];
    const widthNumber = Math.floor((width + 30) / 730);
    const heightNumber = Math.floor((height + 30) / 350);
    const totalNumber = widthNumber * heightNumber;
    const childs = news.children
    console.log(widthNumber, heightNumber, totalNumber )
    for(let child_index=0;  child_index < childs.length; child_index+=1){
        if(child_index >= totalNumber)
            (childs[child_index] as HTMLElement).classList.add("hide")
        else (childs[child_index] as HTMLElement).classList.remove('hide');
        console.log(child_index);
    }
    
}