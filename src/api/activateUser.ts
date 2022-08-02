import axios from "axios";

const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/activation/`;

export interface ActivaitonUserResponseType {
  uid: string;
  token: string;
}

export interface ActivaitonUserType {
  // abortController?: AbortController;
  uid: string;
  token: string;
}

export async function activateUser({
  ...querryBody
}: ActivaitonUserType): Promise<ActivaitonUserResponseType> {
  const { data } = await axios(apiPath, {
    // signal?: AbortController?.signal,
    method: "POST",
    headers: { "content-Type": "application/json" },
    data: querryBody,
  });

  return await data;
}
