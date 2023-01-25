
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素のを削除
const deleteFromIncompleteList = (target) =>{
  document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) =>{
  
  // liタグの生成
  const li = document.createElement("li");
  li.className = "list-row";
  
  // pタグの生成
  const p = document.createElement("p");
  p.innerText = text;

  // 完了btn生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了" ;
  completeButton.addEventListener("click", () => {
    // 押された親タグを削除
    deleteFromIncompleteList(completeButton.parentNode);    

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // liタグ以下を初期化
    addTarget.textContent = null ;
    
    // pタグの生成
    const p = document.createElement("p");
    p.innerText = text;

    // btnの生成
    const backButton = document.createElement("button");
    backButton.className="back";
    backButton.innerText = "戻す";
    backButton.addEventListener("click" , () => {
      // 押された戻すボタンの親タグの削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    })

    // liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  })
  
  // 削除btn生成
  const deleteButton = document.createElement("button");
  deleteButton.className="delete";
  deleteButton.innerText = "削除" ;
  deleteButton.addEventListener("click", () => {
    // 押された親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    
  })

  // liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
}

document
    .getElementById("add-button")
    .addEventListener("click" , () => onClickAdd());