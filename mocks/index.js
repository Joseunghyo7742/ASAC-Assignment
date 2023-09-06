export async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    worker.start();
  }
}
// export async function initMSW() {
//   // if (process.env.NODE_ENV === "development") {
//   if (typeof window === 'undefined') {

//     const { server } = await import('@/mock/server')
//     server.listen({ onUnhandledRequest: 'bypass' })
//     console.log("server msw on");
//   }
//   else {

//     const { worker } = await import('@/mock/worker')
// 		//  onUnhandledRequest: 'bypass은 지정하지 않은 request는 패스합니다
//     worker.start({ onUnhandledRequest: 'bypass' })
//     console.log("browser msw on");
//   }
//   // }
// }

