import jwt from "jsonwebtoken"
import Cookies from "universal-cookie"

const verifyToken = async (req, res, next) => {
    const cookies = Cookies(req.headers.cookie, {path: "/"})
    const token = cookies.get("token")

    if (!token) {
        return res.status(401).send("Token não fornecido!")
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
        if (error) {
            return res.status(401).send(error.message)
        }

        req.userId = decode.userId

        return next()
    })
}

export default verifyToken
