const requestLimit = 5; 
const timeFrame = 60 * 60 * 1000; 

const requestArray = [];

const rateLimitingMiddleware = (req, res, next) => {
    const clientIp = req.ip || req.connection.remoteAddress; 
    const currentTime = Date.now();

    const validRequests = requestArray.filter(
        (entry) => currentTime - entry.timestamp < timeFrame
    );

    requestArray.length = 0; 
    requestArray.push(...validRequests);
    
    const clientRequests = requestArray.filter((entry) => entry.ip === clientIp);

    if (clientRequests.length >= requestLimit) {
        res.status(429).json({
            message: "Too many requests. Please try again later."
        });
    } else {
        requestArray.push({
            ip: clientIp,
            timestamp: currentTime,
        });
        next(); 
    }
};

export default rateLimitingMiddleware;
