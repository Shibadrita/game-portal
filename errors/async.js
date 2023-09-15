const catchAsync = handler => {
    return (req, res) => {
        handler(req, res).catch(err => {
            const response = {
                success: false,
                message: err.message
            }
            if (err.name === 'ValidationError') return res.status(400).json(response)
            res.status(500).json(response)
        })
    }
}

export default catchAsync