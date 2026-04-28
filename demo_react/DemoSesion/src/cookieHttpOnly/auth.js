import jwt from "jsonwebtoken";

export default function auth(req, res, next){
    console.log("Cookie:",req.cookies);
    
    const token = req.cookies?.token;
    const SECRET="supersupersecreto";

    if(!token){
        return res.status(401).json({message:"No autenticado"});
    }

    try{
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();       
    } catch{
        console.log("ERROR EN EL JWT", error.message);
        return res.status(401).json({message:"Token no valido"});
    }
}