// export default function handler(req, res) {
//   const {method} = req;

//    let result = process.env
//    res.status(200).json({ result })
// }

export async function GET(req, res) {
   let result = process.env;
   console.log(process.env);
   res.status(200).json({ result });
}