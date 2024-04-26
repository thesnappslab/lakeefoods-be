const responseSerializer = (status, success, data, message) => {
    return {
        status: status,
        success: success, 
        data: data,
        message: message
    }
}

module.exports = responseSerializer;