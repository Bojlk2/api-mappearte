const {  requestResetPassword, resetPassword } = require('../usecases/auth')

const requestResetPassw = async (req, res, next) => {
    const serviceRequestPassword = await requestResetPassword(
        req.body.email
    )
    return res.json(serviceRequestPassword)
}

const resetPassw = async (req, res, next) => {
    const serviceResetPassword = await resetPassword(
        req.body.id,
        req.body.token,
        req.body.password
    )
    return serviceResetPassword
}

module.exports = {
    requestResetPassw,
    resetPassw
}