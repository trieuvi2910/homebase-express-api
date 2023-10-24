const { CONFIGS } = require("../configs/index.config");

const parseResponse = (type, message, data) => {
    return {
        code: CONFIGS.STATUS_CODE[type],
        message: message || CONFIGS.MESSAGE_RESPONSE[type],
        data,
    };
};

exports.dataResponse = (code, message, data) => {
    const responseTypes = {
        [CONFIGS.STATUS_CODE.success]: "success",
        [CONFIGS.STATUS_CODE.nothing]: "nothing",
    };

    return parseResponse(responseTypes[code] || "error", message, data);
};
