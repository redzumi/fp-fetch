const maybe = (params: RequestInit) => ({ ...params });
const reduce = (acc: RequestInit, curr: RequestInit) => ({ ...acc, ...curr });
const set = (...params: RequestInit[]) => params.reduce(reduce, {});
const headers = (data: HeadersInit): RequestInit => ({ headers: data });
const json = (fn: Promise<Response>) => fn.then(res => res.json());

const post = (): RequestInit => ({ method: 'post' });
const body = (data: string): RequestInit => ({ body: data });
const content = (type: string) => ({ 'Content-Type': type });

const api = () => set(headers(content('application/json')));
const getAPI = () => set(api());
const postAPI = (data: string) => set(api(), post(), body(data));

const request = (url: string) => (params: RequestInit) =>
  fetch(url, maybe(params));

const exmapleTask = JSON.stringify({
  name: 'xczcxzxc asdasd',
  description: 'sadasd azxczxc'
});

request('/api/tasks')(set(postAPI(exmapleTask)));
