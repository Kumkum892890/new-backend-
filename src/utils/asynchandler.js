const asynchandler = (requesthandler) =>{
    (Req, res , next) =>{
        Promise.resolve(requesthandler(Req, res , next)).
        catch((err)=> next(err))
    }
}




    // export {asynchandler}

// async await
    // const asynchandler = (fn) => async (req, res , next) =>{
    //     try {
    //        await fn(req , res ,next)
    //     } catch(error) {
    //         res.status(error.code || 500).json ({
    //             success : false,
    //             message : error.message
    //         })
    //     }

    // }