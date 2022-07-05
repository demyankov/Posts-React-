const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/activation/`;


export interface ActivaitonUserResponseType {
  uid: string,
  token: string,
}

export interface ActivaitonUserType {
    // abortController?: AbortController;
    uid: string,
    token: string,
}

export async function activateUser ({...querryBody}:ActivaitonUserType):
  Promise<ActivaitonUserResponseType> {
    const headers = new Headers();
    headers.append('content-Type', 'application/json')

    const response = await fetch(apiPath, {
        // signal?: AbortController?.signal,
        method: 'POST',
        headers,
        body: JSON.stringify(querryBody)
  })

  if (response.ok){ 
    return await response.json()
    }
  
  return Promise.reject({
    status: response.status,
    errors: [{ global: 'Activation failed!' }]
  });
}


