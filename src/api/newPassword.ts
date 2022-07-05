const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/reset_password_confirm/`;


export interface NewPasswordConfirmType {
    // abortController?: AbortController;
    uid: string,
    token: string,
    new_password: string,
}

export async function ConfirmPasswordResert ({...querryBody}:NewPasswordConfirmType):
  Promise<void> {
    const headers = new Headers();
    headers.append('content-Type', 'application/json')

    const response = await fetch(apiPath, {
        // signal?: AbortController?.signal,
        method: 'POST',
        headers,
        body: JSON.stringify(querryBody)
  })

  

  if (!response.ok){ 
    await Promise.reject({
        global: ['Reset password failed!']
    });
    } 
 
}


