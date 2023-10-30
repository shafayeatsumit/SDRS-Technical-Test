import axios from 'axios';
import {GraphQLClient} from 'graphql-request';

const REST_API_ENDPONT =
  'https://9713356zii.execute-api.eu-west-1.amazonaws.com/dev';

const GRAPHQL_ENDPOINT =
  'https://zgzjtmqrfng43iyc3slad3dfyi.appsync-api.eu-west-1.amazonaws.com/graphql';

const anonymousEndpoints = ['dev/login'];

export const restApi = axios.create({
  baseURL: REST_API_ENDPONT,
  timeout: 10000, // = 10 seconds
});

export const createGraphQLClient = (token: string) => {
  return new GraphQLClient(GRAPHQL_ENDPOINT, {
    headers: {
      'x-api-key': token,
    },
  });
};

const requestInterceptor = request => {
  const token = request.token;
  const isAnonymous = anonymousEndpoints.includes(request.url);
  if (isAnonymous) {
    return request;
  }
  request.headers.Authorization = `Bearer ${token}`;
  return request;
};

restApi.interceptors.request.use(requestInterceptor);
