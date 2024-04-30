// export default function handler(req, res) {
//     // 获取请求方法
//     const { method } = req;
//     console.log(req)
  
//     // 处理 GET 请求
//     if (method === 'GET') {
//       res.status(200).json({ message: 'Hello from Next.js!' });
//     } else {
//       // 其他 HTTP 方法的处理
//       res.setHeader('Allow', ['GET']);
//       res.status(405).end(`Method  $ {method} Not Allowed`);
//     }
//   }