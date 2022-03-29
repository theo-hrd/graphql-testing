const jwt = require('jsonwebtoken');
const debug = require('debug')('jwt:data');
const { MyError } = require('./errorHandler');

const secret = process.env.JWT_SECRET || 'passphrase';

module.exports = {
    create(userData) {
        const options = {};
        options.expiresIn = process.env.JWT_EXPIRES;

        const user = {
            id: userData.id,
            username: userData.username,
            email: userData.email,
            ip: userData.ip,
        };

        return {
            token: jwt.sign(user, secret, options),
            expiresIn: options.expiresIn,
        };
    },
    get(request) {
        if (request.header('authorization')) {
            const bearerHeader = request.header('authorization');
            const [, token] = bearerHeader.split(' ');

            try {
                const user = jwt.verify(token, secret);

                if (!user.ip || user.ip !== request.ip) {
                    throw new MyError(
                        "This IP can't access to this service, please renew your token /signin",
                        { statusCode: 401 },
                    );
                }
                debug(user);

                return user;
            } catch (error) {
                throw new MyError('Token expired', { statusCode: 401 });
            }
        } else if (typeof request.header('authorization') !== 'undefined') {
            throw new MyError('Missing token', { statusCode: 401 });
        }
        return null;
    },
};
