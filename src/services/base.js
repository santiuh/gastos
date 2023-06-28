



export const loginOg = (user,pass) => {
  return fetch('http://localhost:4001/api/auth/signin',
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: user,
      password: pass
    })
  })
  .then(res => res.json())
  
}

export const login = async (user, pass) => {
  const response = await fetch('http://localhost:4001/api/auth/signin',
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: user,
      password: pass
    })
  })
  const responsejson = await response.json()
  return responsejson
}

export const register = (name,email,pass) => {
  return fetch('http://localhost:4001/api/auth/signup',
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: pass
    })
  })
  .then(res => res.json())
  
}


export const balance = async () => {
  return fetch('http://localhost:4001/api/balance',
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
  })
  .then(res => res.json())
} 

export const getOperaciones = () => {
  return fetch('http://localhost:4001/api/operations?limit=20',
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')

    },
  })
  .then(res => res.json())
  
}
 
export const editOperaciones = (a,d,n,c,id) => {
   return fetch('http://localhost:4001/api/operations/'+id,
   {
     method: "PATCH",
     headers: {
       "Content-Type": "application/json",
       'Authorization': 'Bearer ' + sessionStorage.getItem('token')
 
     },
     body: JSON.stringify({
      amount: a,
      dateOperation: d,
      note: n,
      categoryId: c,
    })
   }
   )
}

export const postOperaciones = (a,d,n,c,t) => {
  return fetch('http://localhost:4001/api/operations',
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')

    },
    body: JSON.stringify({
     amount: a,
     dateOperation: d,
     note: n,
     categoryId: c,
     typeId: t,
   })
  }
  )
}

export const deleteOperaciones = (i) => {
  return fetch('http://localhost:4001/api/operations/'+i,
  {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')

    }
  }
  )
}

export const getCategorias = () => {
  return fetch('http://localhost:4001/api/categories',
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')

    }
}).then(res => res.json())
}

export const getCategorias2 = async() =>{
  try{
    const response = await fetch('http://localhost:4001/api/categories',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  
      }
  })
  const responsejson = await response.json()
  return responsejson
  }
  catch(error){console.log(error)}
}