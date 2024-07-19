

let authServices = {
    validateAuth: async (req, res, next) => {
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(' ')[1];
            if (token === '123456') {
                next();
            }else{
                res.status(401).json({ message: 'Unauthorized', code : 101 });
            }
        }else{
            res.status(401).json({ message: 'Unauthorized', code : 102 });
        }
    }
}

export default authServices;   
// Bearer 404040404

// 0 - Bearer
// 1 - 404040404