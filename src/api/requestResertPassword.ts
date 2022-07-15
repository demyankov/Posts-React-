const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/reset_password/`;

export interface RequestResertPasswordType {
  // abortController?: AbortController;
  email: string;
}

export async function requestResertPassword({
  ...querryBody
}: RequestResertPasswordType): Promise<any> {
  const headers = new Headers();
  headers.append("content-Type", "application/json");
  const response = await fetch(apiPath, {
    // signal?: AbortController?.signal,
    method: "POST",
    headers,
    body: JSON.stringify(querryBody),
  });

  if (!response.ok) {
    await Promise.reject({
      global: "There is no user with this email",
    });
  }
}
