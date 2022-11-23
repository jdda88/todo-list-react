async function getalltodos() {
  //await always with async!
  await fetch("https://assets.breatheco.de/apis/fake/todos/user/juanDD", {
    method: "post",
    body: JSON.stringify([]),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await fetch(
    "https://assets.breatheco.de/apis/fake/todos/user/juanDD",
    {
      method: "get",
      //body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  // console.log(data.map((todoinfo)=>{
  //   return todoinfo.label;
  // } ));
  // return data.map((todoinfo)=>{
  //   return todoinfo.label;
  // } )
  return data;
}
async function updatetodos(updatedtodos) {
  //make the array an object
  // let apitodos = updatedtodos.map((todoitem)=>{
  //     return{
  //         label: todoitem,
  //         done: false
  //     }
  // })
  // console.log(JSON.stringify(updatedtodos));
  const response = await fetch(
    "https://assets.breatheco.de/apis/fake/todos/user/juanDD",
    {
      method: "put",
      body: JSON.stringify(updatedtodos),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
}

export { getalltodos, updatetodos };
